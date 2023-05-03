window.BENCHMARK_DATA = {
  "lastUpdate": 1683110478634,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:46:25+09:00",
          "tree_id": "f72af88a9d0ed40709a08fb6a347aab0e1edd9bf",
          "url": "https://github.com/greymistcube/libplanet/commit/12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d"
        },
        "date": 1683108617221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9198497.785714285,
            "unit": "ns",
            "range": "± 121025.86634725817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23540789.236842107,
            "unit": "ns",
            "range": "± 729124.4739395727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71410758.59574468,
            "unit": "ns",
            "range": "± 14410327.639987558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136244229.24731183,
            "unit": "ns",
            "range": "± 25091728.071080543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288788234.71875,
            "unit": "ns",
            "range": "± 52847394.35315752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72526.3021978022,
            "unit": "ns",
            "range": "± 10246.665880741435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388078.967032967,
            "unit": "ns",
            "range": "± 22096.705238288127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373650.2978723404,
            "unit": "ns",
            "range": "± 21200.31018277331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321597.85074626864,
            "unit": "ns",
            "range": "± 15240.421856737601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5167627.373134328,
            "unit": "ns",
            "range": "± 244142.23302348162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4339826.517241379,
            "unit": "ns",
            "range": "± 103833.4175290336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21548.260869565216,
            "unit": "ns",
            "range": "± 2487.5077000027286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110295.01086956522,
            "unit": "ns",
            "range": "± 14980.595521763938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98346.03333333334,
            "unit": "ns",
            "range": "± 11315.348681564932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121032.16842105263,
            "unit": "ns",
            "range": "± 20453.325123029605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6248.621052631579,
            "unit": "ns",
            "range": "± 1034.0189839294728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21272.595505617977,
            "unit": "ns",
            "range": "± 2241.6507397608752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2061199.0617977527,
            "unit": "ns",
            "range": "± 273137.5246038221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3798474.451219512,
            "unit": "ns",
            "range": "± 353694.6462069864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3127404.945652174,
            "unit": "ns",
            "range": "± 445169.72648937325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7980437.5125,
            "unit": "ns",
            "range": "± 693642.1564998934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4150823.949438202,
            "unit": "ns",
            "range": "± 452759.4259915326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4357771.863636363,
            "unit": "ns",
            "range": "± 473839.79270332557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5472563.173076923,
            "unit": "ns",
            "range": "± 225980.75450657657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5743889.659090909,
            "unit": "ns",
            "range": "± 874269.8806800164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9767126.917647058,
            "unit": "ns",
            "range": "± 706613.1590205695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7486518.199100379,
            "unit": "ns",
            "range": "± 235255.43335546975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2260595.5344122024,
            "unit": "ns",
            "range": "± 51050.1971635143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1517735.9639423077,
            "unit": "ns",
            "range": "± 18338.677685438404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3348880.734561012,
            "unit": "ns",
            "range": "± 78109.2778476809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974846.6018415178,
            "unit": "ns",
            "range": "± 13129.335220357096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959342.339468149,
            "unit": "ns",
            "range": "± 10232.062974154462"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "4c2ca5ac4b94e7846843416973a58b75e87c266d",
          "message": "Changed IActionTypeLoader to IActionLoader",
          "timestamp": "2023-05-03T18:42:43+09:00",
          "tree_id": "df79e2790e2a2a3e14665657538de57183736d5a",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2ca5ac4b94e7846843416973a58b75e87c266d"
        },
        "date": 1683108749321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9054132.543956043,
            "unit": "ns",
            "range": "± 787181.1404768411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30404098.639784947,
            "unit": "ns",
            "range": "± 11023939.967939269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71857526.53225806,
            "unit": "ns",
            "range": "± 24713540.090183407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138702349.7826087,
            "unit": "ns",
            "range": "± 37314565.452273965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271820267.95652175,
            "unit": "ns",
            "range": "± 51661207.35217354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86888.21739130435,
            "unit": "ns",
            "range": "± 15303.64220371982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371262.4120879121,
            "unit": "ns",
            "range": "± 45481.68084225373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358144.05913978495,
            "unit": "ns",
            "range": "± 41379.81571172277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334486.82352941175,
            "unit": "ns",
            "range": "± 33446.236243223764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4515965.831578948,
            "unit": "ns",
            "range": "± 340486.09081706445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4055492.212765957,
            "unit": "ns",
            "range": "± 291185.45667308185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25000.358695652172,
            "unit": "ns",
            "range": "± 5011.1214194941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122786.62790697675,
            "unit": "ns",
            "range": "± 13409.173576145999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124077.63888888889,
            "unit": "ns",
            "range": "± 4126.664513712031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128191.94623655915,
            "unit": "ns",
            "range": "± 18135.449651805302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8571.159574468085,
            "unit": "ns",
            "range": "± 1349.2198905189102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25315.648351648353,
            "unit": "ns",
            "range": "± 4668.23830290906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1793643.7127659575,
            "unit": "ns",
            "range": "± 322279.5596600234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3619466.5454545454,
            "unit": "ns",
            "range": "± 571780.4198721484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2784246.5681818184,
            "unit": "ns",
            "range": "± 453215.3139666403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9058441.972527472,
            "unit": "ns",
            "range": "± 2439468.4942291896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3576007.0494505493,
            "unit": "ns",
            "range": "± 246446.88984901048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4140959.8210526314,
            "unit": "ns",
            "range": "± 513771.62225603254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5277778.021739131,
            "unit": "ns",
            "range": "± 816890.1784342024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4913351.23655914,
            "unit": "ns",
            "range": "± 689947.5255702641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8012767.382022472,
            "unit": "ns",
            "range": "± 475795.19542134326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9222687.060526315,
            "unit": "ns",
            "range": "± 1599012.2483924108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2330567.325619905,
            "unit": "ns",
            "range": "± 301170.00556653226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485421.0432871943,
            "unit": "ns",
            "range": "± 105188.86473872056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116011.315575133,
            "unit": "ns",
            "range": "± 204677.34516831193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1092774.7075648357,
            "unit": "ns",
            "range": "± 84736.51928558284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943272.4946875,
            "unit": "ns",
            "range": "± 60784.990525122565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "864e180510f11f376012591f9151d7d00c7902e0",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:47:13+09:00",
          "tree_id": "be97148de5a6bf45e2dd0858c79572a5b3145a21",
          "url": "https://github.com/greymistcube/libplanet/commit/864e180510f11f376012591f9151d7d00c7902e0"
        },
        "date": 1683108821173,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8684648.093406593,
            "unit": "ns",
            "range": "± 840892.8177100149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20386277.520408165,
            "unit": "ns",
            "range": "± 1184350.9959182807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52191309.21649484,
            "unit": "ns",
            "range": "± 3627822.8513586214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106424655.07142857,
            "unit": "ns",
            "range": "± 4823393.859474692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231163171.3,
            "unit": "ns",
            "range": "± 4690537.005191792"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67745.78260869565,
            "unit": "ns",
            "range": "± 13208.715849876216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358276.31868131866,
            "unit": "ns",
            "range": "± 39090.41606892613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344973.867816092,
            "unit": "ns",
            "range": "± 51085.810219148516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316322.4827586207,
            "unit": "ns",
            "range": "± 28921.877971392885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4228718.3,
            "unit": "ns",
            "range": "± 158535.5241423891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795476.6071428573,
            "unit": "ns",
            "range": "± 162799.06512448555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24468.58947368421,
            "unit": "ns",
            "range": "± 3858.7941686566064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121252.8735632184,
            "unit": "ns",
            "range": "± 12834.587016307798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136063.40697674418,
            "unit": "ns",
            "range": "± 18113.871188793026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135481.30434782608,
            "unit": "ns",
            "range": "± 20774.565462581926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8942.604166666666,
            "unit": "ns",
            "range": "± 1441.5221230145412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27630.402173913044,
            "unit": "ns",
            "range": "± 2349.645940406756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1810177.434065934,
            "unit": "ns",
            "range": "± 289101.3347102362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3950524.4318181816,
            "unit": "ns",
            "range": "± 1184752.402963132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2733263.659090909,
            "unit": "ns",
            "range": "± 345558.3296159129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7513929.8965517245,
            "unit": "ns",
            "range": "± 1211479.1956772287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3521844.302325581,
            "unit": "ns",
            "range": "± 291180.43818268506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3609719.7010309277,
            "unit": "ns",
            "range": "± 272976.388824014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5046080.197802198,
            "unit": "ns",
            "range": "± 805417.3743438618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4873289.8522727275,
            "unit": "ns",
            "range": "± 533623.9816056828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9473044.414893618,
            "unit": "ns",
            "range": "± 2150663.359444326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8496467.581473215,
            "unit": "ns",
            "range": "± 1078706.0623318758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2829336.6275082235,
            "unit": "ns",
            "range": "± 546582.0244583143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1690864.6325520833,
            "unit": "ns",
            "range": "± 272329.72823865846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3884494.1171875,
            "unit": "ns",
            "range": "± 319596.5791865754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011943.7861894248,
            "unit": "ns",
            "range": "± 48416.42338715392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 974514.1967424665,
            "unit": "ns",
            "range": "± 52036.81988303581"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "07f4211bc8672c3dc624ec70cb89294e8a6a7767",
          "message": "Update CHANGES.md\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-05-03T19:17:57+09:00",
          "tree_id": "c4a4fe94b72f4641da7598a8daaeac1c75c9020c",
          "url": "https://github.com/greymistcube/libplanet/commit/07f4211bc8672c3dc624ec70cb89294e8a6a7767"
        },
        "date": 1683110460279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8456514.3,
            "unit": "ns",
            "range": "± 339299.72006965603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21571934.166666668,
            "unit": "ns",
            "range": "± 1384526.6831037332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52455977.17391305,
            "unit": "ns",
            "range": "± 1993171.0129449205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105619351.08333333,
            "unit": "ns",
            "range": "± 4144512.3273995975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213568937.4375,
            "unit": "ns",
            "range": "± 3986845.0755737666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72861.25,
            "unit": "ns",
            "range": "± 10093.674177253382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323902.55056179775,
            "unit": "ns",
            "range": "± 27238.514889520295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311331.27659574465,
            "unit": "ns",
            "range": "± 31063.15130812535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302352.5056179775,
            "unit": "ns",
            "range": "± 25172.326615354443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4491973.179775281,
            "unit": "ns",
            "range": "± 443881.0776432068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4061398.695652174,
            "unit": "ns",
            "range": "± 326145.31899649266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23863.191011235955,
            "unit": "ns",
            "range": "± 5498.318757245884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104203.13829787234,
            "unit": "ns",
            "range": "± 17689.62112543152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114106.40659340659,
            "unit": "ns",
            "range": "± 12558.303160307061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137393.90217391305,
            "unit": "ns",
            "range": "± 25723.168584008345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9035.022471910112,
            "unit": "ns",
            "range": "± 1246.5258902019727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23978.093406593405,
            "unit": "ns",
            "range": "± 3118.115306748335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1856867.7634408602,
            "unit": "ns",
            "range": "± 397908.3250643402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3248711.95505618,
            "unit": "ns",
            "range": "± 422347.8566445262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2655015.1136363638,
            "unit": "ns",
            "range": "± 264411.39479460474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7797000.133333334,
            "unit": "ns",
            "range": "± 1582506.905944045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3360079.7282608696,
            "unit": "ns",
            "range": "± 221118.89888787633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3497204.164835165,
            "unit": "ns",
            "range": "± 232621.1329912637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4514565.619047619,
            "unit": "ns",
            "range": "± 241735.74980282222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4456987.269230769,
            "unit": "ns",
            "range": "± 208135.53721259144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7913651.959459459,
            "unit": "ns",
            "range": "± 367012.9995570942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7733841.233870967,
            "unit": "ns",
            "range": "± 570440.0863680799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2141142.105064655,
            "unit": "ns",
            "range": "± 62522.39511382964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380655.832310268,
            "unit": "ns",
            "range": "± 14572.670528879691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3051004.3836495536,
            "unit": "ns",
            "range": "± 130856.36269542588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934370.4866100193,
            "unit": "ns",
            "range": "± 62108.67929581231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 895220.7018103966,
            "unit": "ns",
            "range": "± 24459.598390167444"
          }
        ]
      }
    ]
  }
}