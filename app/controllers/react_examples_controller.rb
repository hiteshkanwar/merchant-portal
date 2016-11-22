class ReactExamplesController < ApplicationController
	before_action :authenticate_user!
  def component
    @name = 'test'
  end
end
