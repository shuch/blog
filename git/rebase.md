## git rebase

本地代码在merge到公共分支前，把公共分支的最新修改同步到本地feature分支

1.更新公共分支
- `git checkout develop`
- `git pull`

2.执行 rebase
- `git checkout feat/shu`
- `git rebase develop`

3.提交到远端
`git push --force-with-lease origin feat/shu`
