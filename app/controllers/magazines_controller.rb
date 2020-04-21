class MagazinesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def list
    @magazines = Magazine.all
    render json: @magazines
  end

  def create
    @magazine = Magazine.new(magazines_params)
      if @magazine.save
        render json: @magazine
      else
        render json: {status: "error", code: 400, message: "Try again"}
      end
  end

  def delete
    @magazine ||= Magazine.find(params[:id])
    @magazine.delete
    render json: params[:id]
  end

private

  def magazines_params
    params.require(:magazine).permit(:name, :image_src, :discription, :release_date)
  end

end
