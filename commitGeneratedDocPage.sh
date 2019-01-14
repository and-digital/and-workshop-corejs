# This script is desgined to be called from lint-staged and
# commits files that were generated from staged js files.

repoName="and-workshop-corejs"

# Work out the relative path for docco
relativePath=$(sed -E "s/^.+$repoName\///" <<< $1)
# Generate docs
./node_modules/.bin/docco $relativePath

# Work out html path
docFile=$(sed -E "s/($repoName)(.+\.)js/\1\/docs\2html/" <<< $1)
git add $docFile