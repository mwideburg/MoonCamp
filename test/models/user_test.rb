# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fistname        :string           not null
#  lastname        :string           not null
#  email           :string           not null
#  zip             :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
