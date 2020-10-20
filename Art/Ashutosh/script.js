const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.font = '1rem Fira Code';
context.fillText('GO CODE ->', 100, 100);

context.fillText('function life(efforts) {', 100, 145);
context.fillText("  efforts.skills = ['coding', 'cooking'];", 100, 170);
context.fillText("  efforts.problems = 'solving positively';", 100, 195);
context.fillText('  return efforts;', 100, 220);
context.fillText('}', 100, 245);
