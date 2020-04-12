class Magazine < ApplicationRecord

  validates :name,  presence: true
  validates :image_src,  presence: true
  validates :discription,  presence: true
  validates :release_date,  presence: true

end
