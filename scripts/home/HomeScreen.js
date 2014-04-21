/**
 * Model and View for home screen
 */

HomeScreen = ScreenLayout.extend({
    initialize: function() {
        this.climateControlButtonVent = _.extend({}, Backbone.Events);
        this.inputZone1View = new SliderButtonsView({leftLabel: "CLIMATE", eventCatcher: "#inputZone1EventCatcher", vent: this.climateControlButtonVent});
        this.mainZoneView = new ClockView();

        this.climateControlButtonVent.on('clickLeft', function(data) {
            Backbone.history.navigate('climate', { trigger: true });
        });
    },

    onRender: function() {
        this.mainZoneContent.show(this.mainZoneView);
        this.inputZone1Content.show(this.inputZone1View);
    }
});