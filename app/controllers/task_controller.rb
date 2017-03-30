class TaskController < ApplicationController
  def index
  	# @tasks = Task.all
  end
  def all
 	render json: Festival.all
  end
  def scrap
  end
end
