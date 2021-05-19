## 提交规范
- `master` 上执行 `merge` 不应该存在冲突，`merge` 过程需要加入 `git merge --no-ff` ，记录合并过程，保留分支历史记录。
- 在个人分支上，落后于 `master`， 先执行 `rebase` ，并且提交 `commit` ，再回到 `master` 去执行如上的 `merge`
