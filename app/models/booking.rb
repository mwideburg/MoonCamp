# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  spot_id    :integer          not null
#  end_date   :date             not null
#  start_date :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  host_id    :integer
#  total      :integer
#  guests     :integer
#
class Booking < ApplicationRecord

    validates :end_date, :start_date, presence: true
    validate :start_must_come_before_end
    
    belongs_to :user
    belongs_to :spot


  def approve!

    transaction do
      self.save!
    end
  end

  

  private


  def start_must_come_before_end
    
    errors[:start_date] << 'must specify a start date' unless start_date
    errors[:end_date] << 'must specify an end date' unless end_date
    errors[:start_date] << 'must come before end date' if start_date > end_date
  end
end
