class Gist < ActiveRecord::Base
  attr_accessible :title, :owner_id
  validates :title, :owner_id, :presence => true

  belongs_to(:owner,
  			 :class_name => "User")
end
