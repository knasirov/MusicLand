class Track < ApplicationRecord
  validates :title, :user_id, presence: true

  has_attached_file :file
  validates_attachment_presence :file
  validates_attachment_content_type :file, content_type: /\Aaudio\/.*\Z/

  has_attached_file :image, default_url: "https://s3.amazonaws.com/musicland-dev/tracks/images/default_track.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :comments, dependent: :destroy
  belongs_to :user
end
