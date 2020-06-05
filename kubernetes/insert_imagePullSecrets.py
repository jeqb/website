import os
import argparse, sys

parser=argparse.ArgumentParser()

# argument for imagePullSecrets
parser.add_argument('--s')
cli_args = parser.parse_args().__dict__

# get the secret value
registry_secret = cli_args.get('s')

# open the yaml file
with open('./kubernetes/deployment.yml', 'r') as myfile:
	yaml_file = myfile.read()
	myfile.close()

# insert the variable
yaml_file = yaml_file.replace('%', registry_secret)
new_file = open('./kubernetes/deployment.yml', 'w')
new_file.write(yaml_file)
new_file.close()