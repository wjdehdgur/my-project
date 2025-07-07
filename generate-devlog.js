import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const log = execSync('git log --since="1 day ago" --pretty=format:"- %h %s (%an)"').toString();

const content = `# 개발 일지 - ${new Date().toISOString().split('T')[0]}

## 오늘 커밋 내역

${log}
`;

writeFileSync('devlog.md', content);

console.log('devlog.md 파일이 생성되었습니다.');
