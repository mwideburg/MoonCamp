# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  lastname        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstname       :string
#  zipcode         :integer
#

class User < ApplicationRecord
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :lastname, presence: true
    validates :firstname, presence: true
    
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token
    before_validation :checkEmail
    before_validation :checkZip
    attr_reader :password
  
    has_one_attached :photo

    has_many :bookings
    has_many :reviews
    has_many :saved,
        class_name: :Save,
        foreign_key: :user_id,
        dependent: :destroy


    


    def checkZip
        if self.zipcode.to_s.length != 5
            errors.add(:zipcode, 'must be valid')
        end
    end

    def checkEmail
        # 
       
        if self.email.split('@').length != 2
        # 
            errors.add(:email, 'must be valid')
        end

    end

    has_many :spots,
        foreign_key: :host_id,
        class_name: :Spot





    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        return user
    end

    def password=(password)
        
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
        # 
    end

    def is_password?(password)
        
        BCrypt::Password.new(self.password_digest).is_password?(password)
        # 
    end

    def reset_session_token! 
        self.session_token = User.generate_session_token
        self.save!
        self.session_token 
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
        
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end
    
    





end

