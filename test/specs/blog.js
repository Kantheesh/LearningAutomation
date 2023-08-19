import BlogPage from '../pages/blog-page';

describe('Blog', () => {
    it('Open the blog tab and check the length of texts >10', async() => {
        //await browser.url('/blog/');
        await BlogPage.open();
        //await $('//*[@id="menu-item-490"]').click();
        //assert Recent Post heading text
        //const blogPosts = await $$('#recent-posts-3 ul li');
        const blogPosts = await BlogPage.blogHeadingText;
        for(const items of blogPosts){
            const postText = await items.getText();
            expect(postText.length).toBeGreaterThan(10);
        }
        //Asserting the count of the posts
        await expect(blogPosts).toHaveLength(5);
        
    })
    
})