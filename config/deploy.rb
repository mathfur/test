set :application, "deploy_test"
set :repository,  "git@github.com:mathfur/test.git"

set :scm, :git
set :scm_username, 'mathfur'
set :scm_password, proc { Capistrano::CLI.password_prompt('scm_password: ') }

role :app, "124.214.225.160"                          # This may be the same as your `Web` server

set :user, 'rails2'
set :deploy_to, '/home/rails2/deploy_test'
set :port, '1258'

set :deploy_via, :copy
set :use_sudo, false

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
  task :uname do
    run 'uname -a'
  end
end
