//
//  LedgerWidget.swift
//  LedgerWidget
//
//  Created by klambert on 10/09/2021.
//  Copyright © 2021 Ledger SAS. All rights reserved.
//

import WidgetKit
import SwiftUI
import Intents


struct SimpleEntry: TimelineEntry {
    let date: Date
    let configuration: ConfigurationIntent
    let totalBalance: String
    let delta: String
    let distribution: String
}

struct Provider: IntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        return SimpleEntry(date: Date(), configuration: ConfigurationIntent(), totalBalance: "", delta: "", distribution: "")
    }

    func getSnapshot(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), configuration: configuration, totalBalance: "$1200",  delta: "10%", distribution: "")
        completion(entry)
    }

    func getTimeline(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []
        var totalBalance = "Loading..."
        var delta = ""
        var distribution = ""


        let sharedDefaults = UserDefaults.init(suiteName: "group.com.kvn")

        if sharedDefaults != nil {
            let c_totalBalance = sharedDefaults?.string(forKey: "totalBalance")
            let c_delta = sharedDefaults?.string(forKey: "delta")
            let c_distribution = sharedDefaults?.string(forKey: "distribution")

            totalBalance = c_totalBalance ?? "Error"
            delta = c_delta ?? "Error"
            distribution = c_distribution ?? "Error"
          }

        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let entry = SimpleEntry(date: entryDate, configuration: configuration, totalBalance: totalBalance, delta: delta, distribution: distribution)
            entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

struct LedgerWidgetEntryView : View {
    var entry: Provider.Entry

    var body: some View {
        ZStack{
        Color(.white)
          VStack(alignment: .leading) {
            Text(entry.totalBalance)
              .font(.system(size:22))
              .bold()
              .foregroundColor(Color(red: 0.39, green: 0.56, blue: 0.95))
                        
            Text("I still hate you xcode.")
              .font(.system(size: 8))
              .foregroundColor(.gray)
            
            Spacer()

            Text(entry.delta)
              .font(.system(size:14))
              .bold()
              .foregroundColor(entry.delta.starts(with: "⬈") ? .green : .red)
            
          }
          .padding(.all)
      }   
    }
}

@main
struct LedgerWidget: Widget {
    let kind: String = "LedgerWidget"

    var body: some WidgetConfiguration {
        IntentConfiguration(kind: kind, intent: ConfigurationIntent.self, provider: Provider()) { entry in
            LedgerWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("My Widget")
        .description("This is an example widget.")
    }
}

struct LedgerWidget_Previews: PreviewProvider {
    static var previews: some View {
        LedgerWidgetEntryView(entry: SimpleEntry(date: Date(), configuration: ConfigurationIntent(), totalBalance: "", delta: "", distribution: ""))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
