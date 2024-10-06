const mapMock = {
    setView: jest.fn(),
    addLayer: jest.fn(),
    removeLayer: jest.fn(),
    fitBounds: jest.fn(),
    locate: jest.fn(),
    on: jest.fn((event, cb) => {
      if (event === 'locationfound') {
        cb({
          latlng: { lat: 48.8566, lng: 2.3522 }, 
          accuracy: 100,
        });
      }
    }),
  };
  
  const markerMock = {
    addTo: jest.fn(),
    bindPopup: jest.fn(),
    openPopup: jest.fn(),
  };
  
  global.L = {
    map: jest.fn(() => mapMock),
    tileLayer: jest.fn(() => ({ addTo: jest.fn() })),
    marker: jest.fn(() => markerMock),
    layerGroup: jest.fn(() => ({
      addLayer: jest.fn(),
    })),
  };
  
  describe('map.js', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="map"></div>
        <select id="categoryFilter">
          <option value="Entrée">Entrée</option>
        </select>
      `;
      jest.clearAllMocks();
    });
  
    it('should initialize the map and add layers', async () => {
      require('./map');
  
      document.dispatchEvent(new Event('DOMContentLoaded'));
  
      expect(L.map).toHaveBeenCalledWith('map', expect.any(Object));
      expect(L.tileLayer().addTo).toHaveBeenCalled();
    });
  
    it('should handle category filtering', () => {
      require('./map');
  
      document.dispatchEvent(new Event('DOMContentLoaded'));
  
      const selectElement = document.getElementById('categoryFilter');
      selectElement.value = 'Entrée';
      selectElement.dispatchEvent(new Event('change'));
  
      expect(mapMock.fitBounds).toHaveBeenCalled();
    });
  });
  