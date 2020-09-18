//Java Solution

class Solution {
    
    int sum = 0;
    public int rangeSumBST(TreeNode root, int L, int R) {
        dfs(root, L, R);
        return sum;
    }
    
    public void dfs(TreeNode node, int L, int R) {
        if (node == null) {
            return;
        }
        
        if (node.val >= L && node.val <= R) {
            sum += node.val;
        }
        
        if (node.val > L) {
            dfs(node.left, L, R);
        }
        
        if (node.val < R) {
            dfs(node.right, L, R);
        }
    }
}