echo "-------------------------------------------------------------------------
git add ."
git add .

echo "-------------------------------------------------------------------------
git commit -m '$1'"
git commit -m "$1"

echo "-------------------------------------------------------------------------
git push -u origin main"
git push -u origin main

echo "-------------------------------------------------------------------------
git log -1"
git log -1