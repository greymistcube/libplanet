window.BENCHMARK_DATA = {
  "lastUpdate": 1705572528235,
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
          "id": "93d8326c18a2645b78951215485e432d2447f372",
          "message": "Removed IStateStore.PruneStates()",
          "timestamp": "2024-01-18T18:43:16+09:00",
          "tree_id": "13ba707ced2bbac5cac8e6e607cd96971834bd13",
          "url": "https://github.com/greymistcube/libplanet/commit/93d8326c18a2645b78951215485e432d2447f372"
        },
        "date": 1705572216558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7813963.794871795,
            "unit": "ns",
            "range": "± 269789.18155392323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19313316.97368421,
            "unit": "ns",
            "range": "± 666009.8825075462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46283114.266666666,
            "unit": "ns",
            "range": "± 306040.9419520921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92475007.5,
            "unit": "ns",
            "range": "± 713713.3830651297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194979451.8265306,
            "unit": "ns",
            "range": "± 7784944.401038235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38203.265957446805,
            "unit": "ns",
            "range": "± 6054.585560567007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217369.25,
            "unit": "ns",
            "range": "± 12661.624400261473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219323.3085106383,
            "unit": "ns",
            "range": "± 18381.824551130092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198063.41666666666,
            "unit": "ns",
            "range": "± 17775.233903660017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3757096.8421052634,
            "unit": "ns",
            "range": "± 78369.77613656878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3453557.8421052634,
            "unit": "ns",
            "range": "± 74831.64604576147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12184.348314606741,
            "unit": "ns",
            "range": "± 885.0408837644886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58120.13043478261,
            "unit": "ns",
            "range": "± 4901.468414685792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51974.5,
            "unit": "ns",
            "range": "± 3378.8971244738686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58053.967391304344,
            "unit": "ns",
            "range": "± 10063.460478439949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6943.352631578948,
            "unit": "ns",
            "range": "± 1846.59760715007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23129.25,
            "unit": "ns",
            "range": "± 2866.2637310376845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1085310.9141414142,
            "unit": "ns",
            "range": "± 163144.62366150247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2278605.3684210526,
            "unit": "ns",
            "range": "± 150138.20703662123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518976.793814433,
            "unit": "ns",
            "range": "± 97073.8117685174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6981212.275862069,
            "unit": "ns",
            "range": "± 542598.5009203118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2890469.5289855073,
            "unit": "ns",
            "range": "± 139256.06098394372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3013401,
            "unit": "ns",
            "range": "± 107353.60125817858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3531614.355555556,
            "unit": "ns",
            "range": "± 112844.42610678963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3485848.988888889,
            "unit": "ns",
            "range": "± 130424.63105208977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12815596.80412371,
            "unit": "ns",
            "range": "± 1826217.0403538295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6410527.138756794,
            "unit": "ns",
            "range": "± 306517.6992608887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1494669.552194149,
            "unit": "ns",
            "range": "± 146492.9838734744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1116320.8255078124,
            "unit": "ns",
            "range": "± 140625.93505392966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2513990.504609375,
            "unit": "ns",
            "range": "± 230417.13007081047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809747.2086437136,
            "unit": "ns",
            "range": "± 43845.083348876855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 631656.9002929687,
            "unit": "ns",
            "range": "± 69423.26034427078"
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
          "id": "8eb0b14be7fd75d992cc66c2804255634511bb9e",
          "message": "Changelog",
          "timestamp": "2024-01-18T18:46:04+09:00",
          "tree_id": "05f426243e74952e5002224a4fb35d5dabe69e4c",
          "url": "https://github.com/greymistcube/libplanet/commit/8eb0b14be7fd75d992cc66c2804255634511bb9e"
        },
        "date": 1705572512968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8492909.69047619,
            "unit": "ns",
            "range": "± 292961.0242895043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23793317.895348836,
            "unit": "ns",
            "range": "± 2098035.1250535306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60537253.322916664,
            "unit": "ns",
            "range": "± 7431173.835622638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112362587.77380952,
            "unit": "ns",
            "range": "± 5896918.117822988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232583536.08333334,
            "unit": "ns",
            "range": "± 6969504.476041318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84204.74418604652,
            "unit": "ns",
            "range": "± 6455.0700765067495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360131.8829787234,
            "unit": "ns",
            "range": "± 50503.35197474602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360793.2105263158,
            "unit": "ns",
            "range": "± 67824.53248764765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 368153.3367346939,
            "unit": "ns",
            "range": "± 79471.71334632137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4642776.305263158,
            "unit": "ns",
            "range": "± 375296.8673749751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4209034.030612245,
            "unit": "ns",
            "range": "± 345061.70502157434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27922.645161290322,
            "unit": "ns",
            "range": "± 6630.736752698789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116480.93333333333,
            "unit": "ns",
            "range": "± 15780.126995010265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124982,
            "unit": "ns",
            "range": "± 22259.58908597811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131619.19791666666,
            "unit": "ns",
            "range": "± 28203.216752935263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9429.347826086956,
            "unit": "ns",
            "range": "± 1263.4115243598708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27285.94680851064,
            "unit": "ns",
            "range": "± 3865.8642410816215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1541812.3854166667,
            "unit": "ns",
            "range": "± 196913.32152262056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054298.895348837,
            "unit": "ns",
            "range": "± 276406.22198636766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2306648.022727273,
            "unit": "ns",
            "range": "± 194714.27278421205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14328196.105263159,
            "unit": "ns",
            "range": "± 4200280.938904496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3540860.846153846,
            "unit": "ns",
            "range": "± 352893.9305454236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3740206.6210526316,
            "unit": "ns",
            "range": "± 414633.39981287904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4509705.384210526,
            "unit": "ns",
            "range": "± 347876.18990360375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4471829.365979382,
            "unit": "ns",
            "range": "± 479139.56440539996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19593559.846938774,
            "unit": "ns",
            "range": "± 3235450.1000136076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6599861.272359914,
            "unit": "ns",
            "range": "± 193021.70727311473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958157.0673253676,
            "unit": "ns",
            "range": "± 39122.054250912995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156140.2290736607,
            "unit": "ns",
            "range": "± 20059.61923577881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3187015.4792455807,
            "unit": "ns",
            "range": "± 283250.971810369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906675.2551125919,
            "unit": "ns",
            "range": "± 17781.19175858474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882917.6930847168,
            "unit": "ns",
            "range": "± 24907.259685572757"
          }
        ]
      }
    ]
  }
}