import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
	provideRouter,
	withEnabledBlockingInitialNavigation,
	withHashLocation,
	withInMemoryScrolling,
	withRouterConfig,
	withViewTransitions,
} from "@angular/router";

import { DropdownModule, SidebarModule } from "@coreui/angular";
import { IconSetService } from "@coreui/icons-angular";
import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "./interceptor/auth.interceptor";

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withInterceptors([authInterceptor])), // for api calss
		provideRouter(
			routes,
			withRouterConfig({
				onSameUrlNavigation: "reload",
			}),
			withInMemoryScrolling({
				scrollPositionRestoration: "top",
				anchorScrolling: "enabled",
			}),
			withEnabledBlockingInitialNavigation(),
			withViewTransitions(),
			withHashLocation()
		),
		importProvidersFrom(SidebarModule, DropdownModule),
		IconSetService,
		provideAnimations(),
	],
};
