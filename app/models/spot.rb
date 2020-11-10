
# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  price       :integer          not null
#  title       :string           not null
#  moon        :string           not null
#  planet      :string           not null
#  description :string           not null
#  lng         :float            not null
#  lat         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  max_guests  :integer
#
class Spot < ApplicationRecord
    validates :host_id, presence: true
    validates :price, presence: true
    validates :title, presence: true
    validates :description, presence: true
    validates :moon, presence: true
    validates :planet, presence: true
    validates :lng, presence: true
    validates :lat, presence: true

    has_many_attached :photos

    belongs_to :host,
        class_name: :User,
        foreign_key: :host_id
    

    has_many :spot_activities,
        class_name: :SpotActivity,
        foreign_key: :spot_id
    has_many :spot_amenities,
        class_name: :SpotAmenity,
        foreign_key: :spot_id
       
    has_many :activities,
        through: :spot_activities,
        source: :activity
    has_many :amenities,
        through: :spot_amenities,
        source: :amenity
        
    has_many :bookings

    has_many :reviews,
        class_name: :Review,
        foreign_key: :spot_id
        
    has_many :saves,
    dependent: :destroy
    has_many :saved_users,
        through: :saves,
        source: :user

    def findByAmenities(name)
        
        data = QuestionsDatabase.instance.execute(<<-SQL, name)
        SELECT
          *
        FROM
          spots
        JOIN
          amenities ON amenities.spot_id = spots.id
        WHERE
          amenities.name = ?
        SQL
        
        return data.map{|datum| Spot.new(datum)}
    end


    
    # def self.find_by_name(fname, lname)
    #     data=QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
    #     SELECT 
    #         *
    #     FROM
    #         users
    #     WHERE
    #         fname = ? AND lname = ?
    #     SQL
    #     User.new(*data)
    # end


    
    # has_many :booking_requests,
    #     class_name: :booking,
    #     foreign_key: :host_id
    
     def self.in_bounds(bounds)
         # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }   
        
        # lat = bounds['lat']
        # lng = bounds['lng']

         self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
        # 
        # if( self.lat.to_f > lat[0].to_f || self.lat.to_f < lat[1].to_f)
        #     # 
        #     return false
        # end
        # if ( self.lng.to_f > lng[0].to_f || self.lng.to_f < lng[1].to_f)
        #     # 
        #     return false
        # end
        # return true
        
    end
    
end
