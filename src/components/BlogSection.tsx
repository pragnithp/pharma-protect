
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogArticle, getBlogArticles } from '@/utils/drugInteractions';

const BlogSection: React.FC = () => {
  const articles = getBlogArticles();

  return (
    <div className="w-full">
      <div className="space-y-8">
        {/* Featured Article */}
        <div className="relative overflow-hidden rounded-xl group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/40 to-foreground/80 z-10"></div>
          <img 
            src={articles[0].imageUrl} 
            alt={articles[0].title} 
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
            <Badge className="mb-3 bg-pharma-blue/90 text-white w-fit">
              {articles[0].category}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {articles[0].title}
            </h3>
            <p className="text-white/90 mb-6 max-w-xl">
              {articles[0].summary}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-white/80 text-sm">{articles[0].date}</span>
              <Button variant="secondary" className="bg-white/90 hover:bg-white text-foreground">
                Read Article <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <Card key={index} className="pharma-card overflow-hidden flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary" className="bg-secondary/60">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.date}
                  </span>
                </div>
                <CardTitle className="text-xl line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {article.summary}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="p-0 h-auto text-pharma-blue hover:text-pharma-blue-dark hover:bg-transparent">
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* More Articles Button */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg" className="px-8">
            View All Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
