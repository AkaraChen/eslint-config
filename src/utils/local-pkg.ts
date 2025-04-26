import { getPackageInfo } from 'local-pkg';
import * as semver from 'semver';

export async function satisfiesSemver(
    name: string,
    version: string,
): Promise<boolean> {
    const info = await getPackageInfo(name);
    if (!info || !info.version) {
        return false;
    }
    return semver.satisfies(info.version, version);
}
