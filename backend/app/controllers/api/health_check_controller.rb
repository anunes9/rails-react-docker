module Api
  class HealthCheckController < ApplicationController
    def index
      render json: 'API is up!'
    end
  end
end
