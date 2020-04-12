class MagazineSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_src, :discription, :release_date
end
