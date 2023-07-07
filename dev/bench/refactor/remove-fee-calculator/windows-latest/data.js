window.BENCHMARK_DATA = {
  "lastUpdate": 1688714579322,
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
          "id": "aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee",
          "message": "Removed IFeeCalculator",
          "timestamp": "2023-07-07T16:02:07+09:00",
          "tree_id": "76cc5bf139a9e106b2356c034b64eb761e2b55f5",
          "url": "https://github.com/greymistcube/libplanet/commit/aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee"
        },
        "date": 1688714163999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404262.8865979381,
            "unit": "ns",
            "range": "± 120181.29215167984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2597540.7407407407,
            "unit": "ns",
            "range": "± 107945.77301890287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855312,
            "unit": "ns",
            "range": "± 142772.23386792114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4983929.545454546,
            "unit": "ns",
            "range": "± 186792.43620405084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49079.78723404255,
            "unit": "ns",
            "range": "± 3181.4847344493423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7047146.666666667,
            "unit": "ns",
            "range": "± 107991.1561634739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19766300,
            "unit": "ns",
            "range": "± 330296.5528992739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50001246.666666664,
            "unit": "ns",
            "range": "± 531922.5519171896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99551093.33333333,
            "unit": "ns",
            "range": "± 1167718.438094846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199518320,
            "unit": "ns",
            "range": "± 2958542.625347825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4797230.15625,
            "unit": "ns",
            "range": "± 12801.5928905358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533103.37890625,
            "unit": "ns",
            "range": "± 3915.788443045026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168851.2109375,
            "unit": "ns",
            "range": "± 5733.218087804962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620487.5130208335,
            "unit": "ns",
            "range": "± 9062.84055878864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837324.1731770834,
            "unit": "ns",
            "range": "± 2573.6086762058076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762344.2103794643,
            "unit": "ns",
            "range": "± 1944.682232415934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3164216.6666666665,
            "unit": "ns",
            "range": "± 74274.90379215132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255447.272727273,
            "unit": "ns",
            "range": "± 125733.2506399891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4019302.9411764704,
            "unit": "ns",
            "range": "± 127397.65823758567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3723127.0833333335,
            "unit": "ns",
            "range": "± 132278.41325246025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6254934.482758621,
            "unit": "ns",
            "range": "± 181335.6364705713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264980.6451612903,
            "unit": "ns",
            "range": "± 11999.246406797462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255722.5,
            "unit": "ns",
            "range": "± 9042.335967192867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231349,
            "unit": "ns",
            "range": "± 15799.146473557656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4043011.7647058824,
            "unit": "ns",
            "range": "± 81951.08207303412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729155,
            "unit": "ns",
            "range": "± 74139.6014286562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19220.212765957447,
            "unit": "ns",
            "range": "± 2000.7299628764015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92452.08333333333,
            "unit": "ns",
            "range": "± 6772.7780068318025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78554.34782608696,
            "unit": "ns",
            "range": "± 5464.921363026293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102805.10204081633,
            "unit": "ns",
            "range": "± 15207.230865875516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6048.453608247422,
            "unit": "ns",
            "range": "± 1156.693689831591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20605.670103092783,
            "unit": "ns",
            "range": "± 2779.012454698197"
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
          "id": "821b18baccee3a44b79a453ff19634129082eb18",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:04:01+09:00",
          "tree_id": "a4935ead63aa78ea06f2e84ff0b0ba87af8b14b7",
          "url": "https://github.com/greymistcube/libplanet/commit/821b18baccee3a44b79a453ff19634129082eb18"
        },
        "date": 1688714558270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738153.2608695652,
            "unit": "ns",
            "range": "± 151295.69218178806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3305228.2608695654,
            "unit": "ns",
            "range": "± 219605.65973114895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2212981.914893617,
            "unit": "ns",
            "range": "± 196852.70568099432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6213732.967032967,
            "unit": "ns",
            "range": "± 358515.45265160856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60044.565217391304,
            "unit": "ns",
            "range": "± 4455.330530786364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9746295.238095239,
            "unit": "ns",
            "range": "± 229587.00197570084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26648546.875,
            "unit": "ns",
            "range": "± 1224633.7746015505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64526233.333333336,
            "unit": "ns",
            "range": "± 2433476.2944098194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128345152.63157895,
            "unit": "ns",
            "range": "± 4357843.724219883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254685580.95238096,
            "unit": "ns",
            "range": "± 5989622.434062021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6319322.518382353,
            "unit": "ns",
            "range": "± 127128.46236570661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2027820.8203125,
            "unit": "ns",
            "range": "± 35473.54421258661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1593270.347377232,
            "unit": "ns",
            "range": "± 44966.92825098819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3342943.1770833335,
            "unit": "ns",
            "range": "± 42710.71832773808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1065082.1533203125,
            "unit": "ns",
            "range": "± 20348.35280965058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1009140.234375,
            "unit": "ns",
            "range": "± 26026.507358340317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3956340.625,
            "unit": "ns",
            "range": "± 251825.6780427892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4131478.2608695654,
            "unit": "ns",
            "range": "± 256347.01704640628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5135780.85106383,
            "unit": "ns",
            "range": "± 198341.14949215314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4484084.057971015,
            "unit": "ns",
            "range": "± 213747.4035777555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7781337.2549019605,
            "unit": "ns",
            "range": "± 313383.8272539184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324181.3953488372,
            "unit": "ns",
            "range": "± 17647.272821319893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315064.38356164383,
            "unit": "ns",
            "range": "± 15664.914528466805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285513.3333333333,
            "unit": "ns",
            "range": "± 17141.84839193647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4940207.792207792,
            "unit": "ns",
            "range": "± 251914.8267539697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4720110.204081632,
            "unit": "ns",
            "range": "± 185799.49233526128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27934.40860215054,
            "unit": "ns",
            "range": "± 2400.112978484641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116726.3440860215,
            "unit": "ns",
            "range": "± 8813.581390320067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126961.70212765958,
            "unit": "ns",
            "range": "± 9771.343953776583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137825.8064516129,
            "unit": "ns",
            "range": "± 20237.658092009766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10131.958762886597,
            "unit": "ns",
            "range": "± 1561.4860971571661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25392.222222222223,
            "unit": "ns",
            "range": "± 2184.6362295998847"
          }
        ]
      }
    ]
  }
}