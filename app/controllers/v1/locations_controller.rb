class V1::LocationsController < V1::BaseController
  def index
    @locations = ['world', 'toronto', 'new york', 'london']
  end
end
