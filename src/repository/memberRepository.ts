import {Course, CourseTerm, Member, ServiceTerm} from "../domain/bbb/member.ts";
import {Caf} from "../domain/nnn/caf.ts";

export class MemberRepository {
    findBy(caf: Caf): Member {
        return new Member("abc12345", new ServiceTerm(new Date("2022-01-01"), new Date("2022-05-31")), new Course("ひかりコース", new CourseTerm(new Date("2022-03-01"), new Date("2022-03-31"))))
    }
}