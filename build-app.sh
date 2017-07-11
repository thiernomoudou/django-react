# Uncomment the following lines if you want the script to set up your virtualenv for you:
virtualenv env
source env/bin/activate

# Install dependencies and setup data
pip install -r requirements.txt
python manage.py migrate

# Install Angular 2 dependencies
npm install
