# Day 13: Server Actions & Forms

## 📅 Date: _______________

## 🎯 Today's Goals
- [ ] Server Actions samjhe
- [ ] Basic form with Server Action banaya
- [ ] Form validation ki
- [ ] External actions file use ki
- [ ] Multiple forms banaye

---

## 📚 Kya Seekha Aaj?

### Server Action Syntax:
```tsx
// actions.ts
'use server';

export async function myAction(formData: FormData) {
  const value = formData.get('field');
  // Server-side logic
  return { success: true };
}
```

### Form with Server Action:
```tsx
<form action={myAction}>
  <input name="field" />
  <button type="submit">Submit</button>
</form>
```

### Rules:
```
✅ 'use server' top of file
✅ FormData parameter
✅ Can return values
✅ Used in Server Components
```

---

## ✅ Problems Completed

- [ ] Problem 1: Contact form
- [ ] Problem 2: Todo app
- [ ] Problem 3: Form validation
- [ ] Problem 4: Newsletter subscription
- [ ] Problem 5: Search form
- [ ] Problem 6: Feedback form
- [ ] Problem 7: Profile update
- [ ] Problem 8: Multi-step form
- [ ] Problem 9: File upload
- [ ] Problem 10: Complete forms app

---

## 💡 Key Learnings

### Server Actions vs API Routes:
```
Server Actions → Direct form handling
API Routes → REST endpoints
```

---

## ⏱️ Time Spent: _____ hours

## 🎯 Self Rating (1-5): _____ ⭐
