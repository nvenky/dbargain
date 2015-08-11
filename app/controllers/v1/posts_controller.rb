class V1::PostsController < V1::BaseController
  def index
    Post.all
  end
  
  def create
  end
end
