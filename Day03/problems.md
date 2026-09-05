# Day 3: Practice Problems

## 🎯 Instructions
Har problem mein different Tailwind classes practice karo. Code likho aur browser mein dekho.

---

## Problem 1: Color Practice
**5 different colored boxes banao:**

```tsx
export default function Colors() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Color Practice</h1>
      
      {/* Text Colors */}
      <div className="space-y-2">
        <p className="text-red-500 text-xl">Red text</p>
        <p className="text-blue-600 text-xl">Blue text</p>
        <p className="text-green-700 text-xl">Green text</p>
        <p className="text-purple-500 text-xl">Purple text</p>
        <p className="text-yellow-600 text-xl">Yellow text</p>
      </div>
      
      {/* Background Colors */}
      <div className="flex flex-wrap gap-4 mt-8">
        <div className="bg-red-500 text-white p-6 rounded">Red BG</div>
        <div className="bg-blue-500 text-white p-6 rounded">Blue BG</div>
        <div className="bg-green-500 text-white p-6 rounded">Green BG</div>
        <div className="bg-purple-500 text-white p-6 rounded">Purple BG</div>
        <div className="bg-yellow-400 text-black p-6 rounded">Yellow BG</div>
      </div>
    </div>
  );
}
```

✅ **Check:** 5 alag-alag colors ke boxes dikh rahe hain?

---

## Problem 2: Padding Practice
**Different padding sizes practice karo:**

```tsx
export default function Padding() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Padding Practice</h1>
      
      <div className="flex flex-wrap gap-4">
        <div className="bg-blue-200 p-1">p-1 (4px)</div>
        <div className="bg-blue-300 p-2">p-2 (8px)</div>
        <div className="bg-blue-400 p-3">p-3 (12px)</div>
        <div className="bg-blue-500 text-white p-4">p-4 (16px)</div>
        <div className="bg-blue-600 text-white p-6">p-6 (24px)</div>
        <div className="bg-blue-700 text-white p-8">p-8 (32px)</div>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Individual Padding</h2>
      <div className="flex flex-wrap gap-4">
        <div className="bg-green-200 px-6 py-2">px-6 py-2</div>
        <div className="bg-green-300 pt-4 pb-8">pt-4 pb-8</div>
        <div className="bg-green-400 pl-8 pr-4">pl-8 pr-4</div>
      </div>
    </div>
  );
}
```

✅ **Check:** Different padding sizes dikh rahe hain?

---

## Problem 3: Font Sizes Practice
**Font sizes ka gradient banao:**

```tsx
export default function FontSizes() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Font Sizes</h1>
      
      <div className="space-y-2">
        <p className="text-xs bg-gray-100 p-2">text-xs - Extra small (12px)</p>
        <p className="text-sm bg-gray-200 p-2">text-sm - Small (14px)</p>
        <p className="text-base bg-gray-300 p-2">text-base - Normal (16px)</p>
        <p className="text-lg bg-gray-400 p-2">text-lg - Large (18px)</p>
        <p className="text-xl bg-gray-500 p-2">text-xl - Extra large (20px)</p>
        <p className="text-2xl bg-gray-600 text-white p-2">text-2xl - 2X large (24px)</p>
        <p className="text-3xl bg-gray-700 text-white p-2">text-3xl - 3X large (30px)</p>
        <p className="text-4xl bg-gray-800 text-white p-2">text-4xl - 4X large (36px)</p>
        <p className="text-5xl bg-gray-900 text-white p-2">text-5xl - 5X large (48px)</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Font sizes gradually badh rahe hain?

---

## Problem 4: Font Weights Practice
**Different font weights dikhao:**

```tsx
export default function FontWeights() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Font Weights</h1>
      
      <div className="space-y-2">
        <p className="font-thin text-lg">font-thin (100)</p>
        <p className="font-light text-lg">font-light (300)</p>
        <p className="font-normal text-lg">font-normal (400)</p>
        <p className="font-medium text-lg">font-medium (500)</p>
        <p className="font-semibold text-lg">font-semibold (600)</p>
        <p className="font-bold text-lg">font-bold (700)</p>
        <p className="font-extrabold text-lg">font-extrabold (800)</p>
        <p className="font-black text-lg">font-black (900)</p>
      </div>
    </div>
  );
}
```

✅ **Check:** Font weights gradually motay ho rahe hain?

---

## Problem 5: Card with Border & Shadow
**Cards banao with borders aur shadows:**

```tsx
export default function BordersShadows() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Borders & Shadows</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Border Card */}
        <div className="border border-gray-300 p-6 rounded">
          <h3 className="font-bold mb-2">Simple Border</h3>
          <p className="text-gray-600 text-sm">border border-gray-300</p>
        </div>
        
        {/* Thick Border Card */}
        <div className="border-4 border-blue-500 p-6 rounded">
          <h3 className="font-bold mb-2">Thick Border</h3>
          <p className="text-gray-600 text-sm">border-4 border-blue-500</p>
        </div>
        
        {/* Shadow Card */}
        <div className="shadow-lg p-6 rounded-lg bg-white">
          <h3 className="font-bold mb-2">Shadow</h3>
          <p className="text-gray-600 text-sm">shadow-lg</p>
        </div>
        
        {/* Border + Shadow Card */}
        <div className="border-2 border-green-500 shadow-xl p-6 rounded-lg">
          <h3 className="font-bold mb-2">Border + Shadow</h3>
          <p className="text-gray-600 text-sm">border-2 + shadow-xl</p>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** 4 cards dikh rahe hain with different borders/shadows?

---

## Problem 6: Button Hover Effects
**Buttons with hover effects banao:**

```tsx
export default function Buttons() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Button Hover Effects</h1>
      
      <div className="flex flex-wrap gap-4">
        {/* Basic Hover */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors">
          Hover Dark
        </button>
        
        {/* Scale Hover */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium hover:scale-105 transition-all">
          Hover Scale
        </button>
        
        {/* Shadow Hover */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded font-medium hover:shadow-lg transition-all">
          Hover Shadow
        </button>
        
        {/* Border Hover */}
        <button className="bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded font-medium transition-all">
          Hover Fill
        </button>
      </div>
    </div>
  );
}
```

✅ **Check:** Buttons pe hover karne pe effects dikh rahe hain?

---

## Problem 7: Card Component with All Properties
**Complete card banao:**

```tsx
export default function Card() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Complete Card</h1>
      
      <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Image */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-600 mb-4">
            Ye ek complete card hai jo sab Tailwind properties use karta hai.
          </p>
          
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Tailwind
            </span>
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              React
            </span>
          </div>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** Card mein image, title, description, tags, button sab dikh raha hai?

---

## Problem 8: Text Alignment Practice
**Different alignments practice karo:**

```tsx
export default function TextAlign() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Text Alignment</h1>
      
      <div className="space-y-4">
        <div className="bg-gray-100 p-4">
          <p className="text-left">Left aligned text</p>
        </div>
        <div className="bg-gray-200 p-4">
          <p className="text-center">Center aligned text</p>
        </div>
        <div className="bg-gray-300 p-4">
          <p className="text-right">Right aligned text</p>
        </div>
        <div className="bg-gray-400 p-4">
          <p className="text-justify">
            Justified text - this text will be aligned to both left and right margins. 
            This is useful for paragraphs where you want clean edges on both sides.
          </p>
        </div>
      </div>
    </div>
  );
}
```

✅ **Check:** 4 different alignments dikh rahe hain?

---

## Problem 9: Color Shades Comparison
**Ek hi color ki different shades dikhao:**

```tsx
export default function ColorShades() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blue Color Shades</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-blue-50 p-4 rounded text-center">50</div>
        <div className="bg-blue-100 p-4 rounded text-center">100</div>
        <div className="bg-blue-200 p-4 rounded text-center">200</div>
        <div className="bg-blue-300 p-4 rounded text-center">300</div>
        <div className="bg-blue-400 p-4 rounded text-center">400</div>
        <div className="bg-blue-500 text-white p-4 rounded text-center">500</div>
        <div className="bg-blue-600 text-white p-4 rounded text-center">600</div>
        <div className="bg-blue-700 text-white p-4 rounded text-center">700</div>
        <div className="bg-blue-800 text-white p-4 rounded text-center">800</div>
        <div className="bg-blue-900 text-white p-4 rounded text-center">900</div>
      </div>
    </div>
  );
}
```

✅ **Check:** 10 shades dikh rahe hain light se dark?

---

## Problem 10: Responsive Tailwind Classes
**Responsive classes practice karo:**

```tsx
export default function ResponsiveTailwind() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        Responsive Tailwind
      </h1>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded">1</div>
        <div className="bg-green-500 text-white p-6 rounded">2</div>
        <div className="bg-purple-500 text-white p-6 rounded">3</div>
      </div>
      
      {/* Responsive Text */}
      <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-600">
        This text changes size based on screen width.
      </p>
    </div>
  );
}
```

✅ **Check:** Mobile pe 1 column, tablet pe 2, desktop pe 3 columns?

---

## ✅ Checklist
- [ ] Problem 1: Colors
- [ ] Problem 2: Padding
- [ ] Problem 3: Font Sizes
- [ ] Problem 4: Font Weights
- [ ] Problem 5: Borders & Shadows
- [ ] Problem 6: Button Hover Effects
- [ ] Problem 7: Complete Card
- [ ] Problem 8: Text Alignment
- [ ] Problem 9: Color Shades
- [ ] Problem 10: Responsive Classes

---

## 🎯 Challenge Problem
**Landing Page Sections Banao:**
1. Hero section with gradient background
2. Features section with 3 cards
3. Testimonials section
4. CTA (Call to Action) section
5. Footer

Sab sections mein different Tailwind properties use karo!
