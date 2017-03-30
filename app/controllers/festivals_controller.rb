class FestivalsController < ApplicationController
  def index
  	# @tasks = Task.all
  end
  def all
 	render json: Festival.all
  end
end