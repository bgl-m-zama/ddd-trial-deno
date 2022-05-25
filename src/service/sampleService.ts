import {SampleDomain} from '../domain/sampleDomain.ts'

export class SampleService {
    invoke(request: string): string {
        return new SampleDomain().body(request);
    }
}