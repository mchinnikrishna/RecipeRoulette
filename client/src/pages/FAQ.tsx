import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqs = [
    {
      id: '1',
      category: 'Orders & Shopping',
      questions: [
        {
          question: 'How do I know if a vintage item will fit me?',
          answer: 'We provide detailed measurements for every item in the product description. Vintage sizes often run smaller than modern sizes, so we recommend checking our size guide and comparing the listed measurements to your own clothing.'
        },
        {
          question: 'Can I reserve an item while I decide?',
          answer: 'Items can be held in your cart for 30 minutes. For longer holds, please contact us directly. We understand vintage pieces are unique and want to help you make the right decision.'
        },
        {
          question: 'Do you authenticate all vintage items?',
          answer: 'Yes! Every item is carefully inspected and authenticated by our vintage specialists. We guarantee the authenticity and accurate dating of all pieces in our collection.'
        }
      ]
    },
    {
      id: '2',
      category: 'Shipping & Delivery',
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 5-7 business days and is free on orders over $100. Express shipping (2-3 days) is available for $19.99, and overnight shipping for $39.99.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes! We ship worldwide. International shipping starts at $29.99 and typically takes 7-14 business days. Duties and taxes may apply depending on your country.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Absolutely! You\'ll receive a tracking number via email once your order ships. You can track your package in real-time through our shipping partners.'
        }
      ]
    },
    {
      id: '3',
      category: 'Returns & Exchanges',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer 30-day returns on most items. Items must be in original condition with tags attached. We provide prepaid return labels and process refunds within 3-5 business days of receiving your return.'
        },
        {
          question: 'Can I exchange for a different size?',
          answer: 'Yes! Size exchanges are free within 30 days. Simply contact us to start the exchange process. We\'ll send you the new size as soon as we receive your return.'
        },
        {
          question: 'What if my item arrives damaged?',
          answer: 'Please contact us immediately with photos of the damage. We\'ll arrange for a replacement or full refund at no cost to you, including return shipping.'
        }
      ]
    },
    {
      id: '4',
      category: 'Vintage Care',
      questions: [
        {
          question: 'How should I care for vintage clothing?',
          answer: 'Vintage items require special care. We recommend dry cleaning for most pieces, especially those with delicate fabrics or embellishments. Always check the care instructions included with your item.'
        },
        {
          question: 'Can vintage items be altered?',
          answer: 'Many vintage pieces can be altered, but we recommend consulting with a tailor experienced in vintage clothing. Some alterations may affect the item\'s value or authenticity.'
        },
        {
          question: 'How do you clean vintage items before selling?',
          answer: 'All items are professionally cleaned and inspected before listing. We use gentle, conservation-grade cleaning methods to preserve the integrity of each piece.'
        }
      ]
    },
    {
      id: '5',
      category: 'Account & Payment',
      questions: [
        {
          question: 'Do I need an account to shop?',
          answer: 'You can browse and shop as a guest, but creating an account lets you track orders, save favorites, and access exclusive member benefits.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and digital wallets like Apple Pay and Google Pay. All transactions are securely processed.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes! We use industry-standard SSL encryption and never store your payment information. All transactions are processed through secure, PCI-compliant payment processors.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about shopping for vintage clothing, shipping, returns, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, index) => (
                  <Collapsible
                    key={`${category.id}-${index}`}
                    open={openItems.includes(`${category.id}-${index}`)}
                    onOpenChange={() => toggleItem(`${category.id}-${index}`)}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left border rounded-lg hover-elevate">
                      <span className="font-medium text-foreground">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${
                        openItems.includes(`${category.id}-${index}`) ? 'rotate-180' : ''
                      }`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 px-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="max-w-2xl mx-auto mt-12">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our vintage specialists are here to help! Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="text-primary hover:underline"
                data-testid="link-contact-faq"
              >
                Contact Us
              </a>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <a 
                href="mailto:hello@vintagethreads.com" 
                className="text-primary hover:underline"
                data-testid="link-email-faq"
              >
                hello@vintagethreads.com
              </a>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <a 
                href="tel:555-123-8468" 
                className="text-primary hover:underline"
                data-testid="link-phone-faq"
              >
                (555) 123-VINTAGE
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}