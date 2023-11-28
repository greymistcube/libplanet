window.BENCHMARK_DATA = {
  "lastUpdate": 1701157020672,
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
          "id": "7c4d1cff60e49dcfaf20f5cde3ca660998a9fede",
          "message": "Update TxInvoice specification",
          "timestamp": "2023-11-28T15:43:22+09:00",
          "tree_id": "135093997f2cdf1d6426d6599a5f96dca0a7c2e9",
          "url": "https://github.com/greymistcube/libplanet/commit/7c4d1cff60e49dcfaf20f5cde3ca660998a9fede"
        },
        "date": 1701154593286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967759.595959596,
            "unit": "ns",
            "range": "± 113124.62959162892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752795.6043956045,
            "unit": "ns",
            "range": "± 112236.05175609713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1380037.1134020619,
            "unit": "ns",
            "range": "± 162108.8326040485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5087121.276595744,
            "unit": "ns",
            "range": "± 289208.0137917404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34679.77528089887,
            "unit": "ns",
            "range": "± 2183.2617266624943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5001469.230769231,
            "unit": "ns",
            "range": "± 42230.861239449536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13255988.235294119,
            "unit": "ns",
            "range": "± 269980.87405025784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32162113.333333332,
            "unit": "ns",
            "range": "± 424407.09881410975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65211257.14285714,
            "unit": "ns",
            "range": "± 494157.2339530525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127397163.33333333,
            "unit": "ns",
            "range": "± 1269147.2175478793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314760.6584821427,
            "unit": "ns",
            "range": "± 14379.052366850603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088964.5963541667,
            "unit": "ns",
            "range": "± 3658.160026294278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733284.3470982143,
            "unit": "ns",
            "range": "± 3663.3703056414315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1896166.9771634615,
            "unit": "ns",
            "range": "± 3054.29746353272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617774.0652901785,
            "unit": "ns",
            "range": "± 2242.1237253589356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560924.9609375,
            "unit": "ns",
            "range": "± 968.7070436578443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2149691.6666666665,
            "unit": "ns",
            "range": "± 55542.9400410691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272221.4285714286,
            "unit": "ns",
            "range": "± 29197.561240925283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2797285.4838709678,
            "unit": "ns",
            "range": "± 83307.84096104879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2641372.222222222,
            "unit": "ns",
            "range": "± 87774.84706781195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5879788.235294118,
            "unit": "ns",
            "range": "± 185871.04321513438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176796.06741573033,
            "unit": "ns",
            "range": "± 10427.455631646146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166865.47619047618,
            "unit": "ns",
            "range": "± 8396.60708940725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141648.27586206896,
            "unit": "ns",
            "range": "± 4083.295298237789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752773.076923077,
            "unit": "ns",
            "range": "± 37032.30917829623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2537833.3333333335,
            "unit": "ns",
            "range": "± 32622.399549710506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11974.193548387097,
            "unit": "ns",
            "range": "± 1733.8010031873835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56322.82608695652,
            "unit": "ns",
            "range": "± 5536.295886713973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45944.252873563215,
            "unit": "ns",
            "range": "± 2951.6001305495724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64782.82828282828,
            "unit": "ns",
            "range": "± 18014.393567163486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2646.907216494845,
            "unit": "ns",
            "range": "± 528.2545173034932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11782.65306122449,
            "unit": "ns",
            "range": "± 2425.807358862224"
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
          "id": "25cc930a3b730f4cc40eb3c1a97bd4969909cbb1",
          "message": "Changelog",
          "timestamp": "2023-11-28T15:50:14+09:00",
          "tree_id": "1bab440f9769e7163c0f4ee7709407be9007550b",
          "url": "https://github.com/greymistcube/libplanet/commit/25cc930a3b730f4cc40eb3c1a97bd4969909cbb1"
        },
        "date": 1701154893597,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 908623.9583333334,
            "unit": "ns",
            "range": "± 88724.37835619353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1627616.6666666667,
            "unit": "ns",
            "range": "± 64632.627282464404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1285437.7551020407,
            "unit": "ns",
            "range": "± 113423.38393723957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4760571.621621622,
            "unit": "ns",
            "range": "± 156941.57110766333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33679.032258064515,
            "unit": "ns",
            "range": "± 1526.824315612519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5034014.285714285,
            "unit": "ns",
            "range": "± 35804.852639376586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12981278.57142857,
            "unit": "ns",
            "range": "± 79023.98057232061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32080714.285714287,
            "unit": "ns",
            "range": "± 383383.928592862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64076833.333333336,
            "unit": "ns",
            "range": "± 1081433.4730655726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128202926.66666667,
            "unit": "ns",
            "range": "± 1090849.730037923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3236997.7604166665,
            "unit": "ns",
            "range": "± 25970.35457107223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041942.8013392857,
            "unit": "ns",
            "range": "± 2095.22855928622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717567.28515625,
            "unit": "ns",
            "range": "± 787.8585742986348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1880570.033482143,
            "unit": "ns",
            "range": "± 3128.8425263402414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606932.6450892857,
            "unit": "ns",
            "range": "± 2146.4671145211482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570389.1183035715,
            "unit": "ns",
            "range": "± 601.0690698084637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2181815.3846153845,
            "unit": "ns",
            "range": "± 34751.44711984059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226633.3333333335,
            "unit": "ns",
            "range": "± 33915.47616958258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2701566.6666666665,
            "unit": "ns",
            "range": "± 63129.044281408685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2636737.5,
            "unit": "ns",
            "range": "± 80764.47538287466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6025357.142857143,
            "unit": "ns",
            "range": "± 364778.4637678957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 161539.34426229508,
            "unit": "ns",
            "range": "± 6926.790471026838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158212.5,
            "unit": "ns",
            "range": "± 7255.922594571465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137826.66666666666,
            "unit": "ns",
            "range": "± 4052.324435843376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2711657.1428571427,
            "unit": "ns",
            "range": "± 28712.70729902634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2508985.714285714,
            "unit": "ns",
            "range": "± 36750.02579052695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10461.95652173913,
            "unit": "ns",
            "range": "± 2303.2629693070603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54323.71134020619,
            "unit": "ns",
            "range": "± 9033.903424460228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42680.39215686275,
            "unit": "ns",
            "range": "± 1479.4620113869958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55155.67010309279,
            "unit": "ns",
            "range": "± 19515.058123323666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2243.298969072165,
            "unit": "ns",
            "range": "± 329.11092877087214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9074.489795918367,
            "unit": "ns",
            "range": "± 1055.5998172231782"
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
          "id": "2787f845eec8c31300efa636b56b8a26920658e8",
          "message": "Changelog",
          "timestamp": "2023-11-28T16:07:25+09:00",
          "tree_id": "5b7275b547672067b98b8eb12ed055926dda5dad",
          "url": "https://github.com/greymistcube/libplanet/commit/2787f845eec8c31300efa636b56b8a26920658e8"
        },
        "date": 1701155997920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 915555.7894736842,
            "unit": "ns",
            "range": "± 84363.37780102075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1639573.1707317072,
            "unit": "ns",
            "range": "± 58450.93679484635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1310289,
            "unit": "ns",
            "range": "± 116300.41289433988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5078467.525773196,
            "unit": "ns",
            "range": "± 306233.117905539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34506.666666666664,
            "unit": "ns",
            "range": "± 2290.174420520082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4981642.857142857,
            "unit": "ns",
            "range": "± 42062.219742547226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13059476.923076924,
            "unit": "ns",
            "range": "± 108269.38743897213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32480733.333333332,
            "unit": "ns",
            "range": "± 374381.4606724511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64945800,
            "unit": "ns",
            "range": "± 1041607.8325949152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125911926.66666667,
            "unit": "ns",
            "range": "± 802796.2750524539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281441.2760416665,
            "unit": "ns",
            "range": "± 8064.468319486833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059590.5348557692,
            "unit": "ns",
            "range": "± 1466.660097025227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717223.5072544643,
            "unit": "ns",
            "range": "± 2332.145018589654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922551.532451923,
            "unit": "ns",
            "range": "± 2724.153853757477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618854.3666294643,
            "unit": "ns",
            "range": "± 1654.6235873841406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577220.1729910715,
            "unit": "ns",
            "range": "± 1189.4171535493524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2099442.8571428573,
            "unit": "ns",
            "range": "± 83537.144931661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260390.697674419,
            "unit": "ns",
            "range": "± 61940.385371563934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2779010.810810811,
            "unit": "ns",
            "range": "± 93262.12099889865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2610750,
            "unit": "ns",
            "range": "± 104428.12389976413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5921798.4375,
            "unit": "ns",
            "range": "± 272750.9070546002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171166.66666666666,
            "unit": "ns",
            "range": "± 10380.095221701687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160960,
            "unit": "ns",
            "range": "± 7460.395917535263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144467.64705882352,
            "unit": "ns",
            "range": "± 4267.759371552704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2808921.4285714286,
            "unit": "ns",
            "range": "± 46256.511867086236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2491746.6666666665,
            "unit": "ns",
            "range": "± 39617.039383626456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11805.882352941177,
            "unit": "ns",
            "range": "± 855.9807715319856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59056.56565656565,
            "unit": "ns",
            "range": "± 7356.64577538723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44280,
            "unit": "ns",
            "range": "± 2171.685109820532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57713.63636363636,
            "unit": "ns",
            "range": "± 9465.86343303744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2517.3469387755104,
            "unit": "ns",
            "range": "± 565.1430820021263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10212.5,
            "unit": "ns",
            "range": "± 1061.6418102794055"
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
          "distinct": false,
          "id": "036e7abd9c33b20bbb95026fc963dc519670c011",
          "message": "Suggestion",
          "timestamp": "2023-11-28T16:22:14+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/036e7abd9c33b20bbb95026fc963dc519670c011"
        },
        "date": 1701156998517,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 935808.2474226804,
            "unit": "ns",
            "range": "± 87345.21866100139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1721245,
            "unit": "ns",
            "range": "± 76386.04767666028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1341397.93814433,
            "unit": "ns",
            "range": "± 152277.8265343901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5025420.689655173,
            "unit": "ns",
            "range": "± 214772.70462548913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33764,
            "unit": "ns",
            "range": "± 1717.7641029878093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5066386.666666667,
            "unit": "ns",
            "range": "± 24099.077239793307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13056146.666666666,
            "unit": "ns",
            "range": "± 112968.78751398968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32296593.333333332,
            "unit": "ns",
            "range": "± 307322.1215287835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63330900,
            "unit": "ns",
            "range": "± 720050.018561745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129326553.33333333,
            "unit": "ns",
            "range": "± 595459.7393930972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3246629.0625,
            "unit": "ns",
            "range": "± 23033.038183664463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1031932.4079241072,
            "unit": "ns",
            "range": "± 1394.111798384335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728307.8255208334,
            "unit": "ns",
            "range": "± 3491.6136285278517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918718.540736607,
            "unit": "ns",
            "range": "± 4364.392922513882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605696.328125,
            "unit": "ns",
            "range": "± 3424.4999198874575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558595.2706473215,
            "unit": "ns",
            "range": "± 1089.721593894152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186791.6666666665,
            "unit": "ns",
            "range": "± 71683.6995816642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192314.925373134,
            "unit": "ns",
            "range": "± 103685.10786048207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2694994.117647059,
            "unit": "ns",
            "range": "± 52676.186158788056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2552904.5454545454,
            "unit": "ns",
            "range": "± 119924.92193909449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5570058.333333333,
            "unit": "ns",
            "range": "± 140480.09890516804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165226.22950819673,
            "unit": "ns",
            "range": "± 6482.872347947429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161196.38554216866,
            "unit": "ns",
            "range": "± 8070.579599325982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144679.3103448276,
            "unit": "ns",
            "range": "± 3464.759248525979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2708842.8571428573,
            "unit": "ns",
            "range": "± 39077.825982473536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2470428.5714285714,
            "unit": "ns",
            "range": "± 30004.13249925695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9133.333333333334,
            "unit": "ns",
            "range": "± 863.7733601302385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49298.75,
            "unit": "ns",
            "range": "± 2417.158796101245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43180.95238095238,
            "unit": "ns",
            "range": "± 1884.132138957003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45274.117647058825,
            "unit": "ns",
            "range": "± 5608.86103668575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2011.2359550561798,
            "unit": "ns",
            "range": "± 190.35744024382075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9016.304347826086,
            "unit": "ns",
            "range": "± 1022.9538326420957"
          }
        ]
      }
    ]
  }
}