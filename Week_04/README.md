## 字符串算法分析

1. #### 字典树

   - 大量高度重复字符串的存储与分析

2. #### KMP

   - [ ] 在长字符里找模式，属于部分匹配
   - [ ] KMP 是由三个科学家发明的算法
   - [ ] 算法分为2部分，第一部分求跳转表格，第二部分进行真正的匹配

3. #### Wildcard

   - [ ] 带通配符的字符串模式，基于KMP
   - [ ] 只有两种通配符 ？匹配任意字符， * 匹配任意数量的任意字符
   - [ ] Wildcard：ab*c?d*abc*a?b
     - 只有*：ab*cd*abc*a?d (最后一个星号可以多匹配，其它得星号应该少匹配)
     - 只有?:c?d, a?d

4. #### 正则

   - [ ] 字符串通用模式匹配

5. #### 状态机

   - [ ] 通用的字符串分析，成本比较高，需要一定的设计

6. #### LL LR

   - [ ] 字符串多层级结构分析