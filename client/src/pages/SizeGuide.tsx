import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ruler, AlertTriangle, Info } from 'lucide-react';

export default function SizeGuide() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-sizeguide-title">
            Size Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive vintage sizing guide. Remember, vintage sizes often differ from modern sizing.
          </p>
        </div>

        {/* Vintage Sizing Note */}
        <Card className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important: Vintage Sizing</h3>
                <p className="text-amber-700 dark:text-amber-300">
                  Vintage clothing sizes run smaller than modern sizes. A vintage size 10 typically fits like a modern size 6-8. 
                  Always check the specific measurements provided for each item.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Women's Clothing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-primary" />
                Women's Clothing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Dresses & Tops */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Dresses & Tops</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Vintage Size</th>
                        <th className="text-left py-2">Bust</th>
                        <th className="text-left py-2">Waist</th>
                        <th className="text-left py-2">Modern Equiv.</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2">6</td>
                        <td>32"</td>
                        <td>24"</td>
                        <td>XS/0-2</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">8</td>
                        <td>34"</td>
                        <td>26"</td>
                        <td>S/2-4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">10</td>
                        <td>36"</td>
                        <td>28"</td>
                        <td>M/6-8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">12</td>
                        <td>38"</td>
                        <td>30"</td>
                        <td>L/10-12</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">14</td>
                        <td>40"</td>
                        <td>32"</td>
                        <td>XL/14-16</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Skirts */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Skirts</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Vintage Size</th>
                        <th className="text-left py-2">Waist</th>
                        <th className="text-left py-2">Hips</th>
                        <th className="text-left py-2">Modern Equiv.</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2">6</td>
                        <td>24"</td>
                        <td>34"</td>
                        <td>XS/0-2</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">8</td>
                        <td>26"</td>
                        <td>36"</td>
                        <td>S/2-4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">10</td>
                        <td>28"</td>
                        <td>38"</td>
                        <td>M/6-8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">12</td>
                        <td>30"</td>
                        <td>40"</td>
                        <td>L/10-12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Men's Clothing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-primary" />
                Men's Clothing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Suits & Jackets */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Suits & Jackets</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Vintage Size</th>
                        <th className="text-left py-2">Chest</th>
                        <th className="text-left py-2">Waist</th>
                        <th className="text-left py-2">Modern Equiv.</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2">36</td>
                        <td>36"</td>
                        <td>30"</td>
                        <td>S</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">38</td>
                        <td>38"</td>
                        <td>32"</td>
                        <td>M</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">40</td>
                        <td>40"</td>
                        <td>34"</td>
                        <td>L</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">42</td>
                        <td>42"</td>
                        <td>36"</td>
                        <td>XL</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">44</td>
                        <td>44"</td>
                        <td>38"</td>
                        <td>XXL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Shirts */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Dress Shirts</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Neck Size</th>
                        <th className="text-left py-2">Chest</th>
                        <th className="text-left py-2">Modern Size</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2">14"</td>
                        <td>36"</td>
                        <td>S</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">15"</td>
                        <td>38"</td>
                        <td>M</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">16"</td>
                        <td>40"</td>
                        <td>L</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">17"</td>
                        <td>42"</td>
                        <td>XL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Shoes */}
          <Card>
            <CardHeader>
              <CardTitle>Shoe Sizes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Women's Shoes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">US Size</th>
                        <th className="text-left py-2">EU Size</th>
                        <th className="text-left py-2">Length (inches)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2">6</td>
                        <td>36</td>
                        <td>9"</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">7</td>
                        <td>37</td>
                        <td>9.5"</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">8</td>
                        <td>38</td>
                        <td>10"</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">9</td>
                        <td>39</td>
                        <td>10.5"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Men's Shoes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">US Size</th>
                        <th className="text-left py-2">EU Size</th>
                        <th className="text-left py-2">Length (inches)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2">8</td>
                        <td>41</td>
                        <td>10.5"</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">9</td>
                        <td>42</td>
                        <td>11"</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">10</td>
                        <td>43</td>
                        <td>11.5"</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">11</td>
                        <td>44</td>
                        <td>12"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Measuring Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Measuring Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">How to Measure</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• <strong>Chest/Bust:</strong> Measure around the fullest part</li>
                  <li>• <strong>Waist:</strong> Measure at the narrowest point</li>
                  <li>• <strong>Hips:</strong> Measure around the fullest part</li>
                  <li>• <strong>Inseam:</strong> Measure from crotch to ankle</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Best Practices</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Use a soft measuring tape</li>
                  <li>• Measure over undergarments only</li>
                  <li>• Stand straight and relaxed</li>
                  <li>• Have someone help for accuracy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">When in Doubt</h3>
                <p className="text-muted-foreground text-sm">
                  Every vintage item includes specific measurements in the product description. 
                  Contact us if you need help determining the best size for you!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}