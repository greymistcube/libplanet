window.BENCHMARK_DATA = {
  "lastUpdate": 1682677126517,
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
          "id": "fe1b7be5dbef726cda8b35ac5aa658e6ae372266",
          "message": "Partially removed t from transaction",
          "timestamp": "2023-04-28T18:39:17+09:00",
          "tree_id": "f6b5624d4eb813142323df63ac2449af272bad92",
          "url": "https://github.com/greymistcube/libplanet/commit/fe1b7be5dbef726cda8b35ac5aa658e6ae372266"
        },
        "date": 1682676489931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386767.15789473685,
            "unit": "ns",
            "range": "± 38637.994712325555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363010.59550561797,
            "unit": "ns",
            "range": "± 38113.26019061151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319478.75,
            "unit": "ns",
            "range": "± 30897.749948529716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5537433.949152542,
            "unit": "ns",
            "range": "± 241272.71904312534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5399131.572916667,
            "unit": "ns",
            "range": "± 578725.0801754845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20850.875,
            "unit": "ns",
            "range": "± 2070.286380392597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108415.1182795699,
            "unit": "ns",
            "range": "± 10489.821179983564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92188.90909090909,
            "unit": "ns",
            "range": "± 10195.735108634082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116782.45054945054,
            "unit": "ns",
            "range": "± 17572.995471754533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5444.867346938776,
            "unit": "ns",
            "range": "± 693.7238619614754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19883.74712643678,
            "unit": "ns",
            "range": "± 1972.965046534352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4317045.088888889,
            "unit": "ns",
            "range": "± 358661.48277830664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4600897.96969697,
            "unit": "ns",
            "range": "± 573491.9151821362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5394003.957746479,
            "unit": "ns",
            "range": "± 260910.38363180988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6085401.948979592,
            "unit": "ns",
            "range": "± 654575.0237234414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10601866.285714285,
            "unit": "ns",
            "range": "± 1056679.2245103202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7707788.641447368,
            "unit": "ns",
            "range": "± 264450.6991848227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2447447.547762784,
            "unit": "ns",
            "range": "± 91178.76255191519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1795440.6622121711,
            "unit": "ns",
            "range": "± 32488.212943539365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3357564.9260110296,
            "unit": "ns",
            "range": "± 67638.91887075233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1119803.839029948,
            "unit": "ns",
            "range": "± 29011.14146370595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1152691.4349888393,
            "unit": "ns",
            "range": "± 64366.43886797567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61132.443181818184,
            "unit": "ns",
            "range": "± 11849.309608733798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9668307.285714285,
            "unit": "ns",
            "range": "± 124222.20669208284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25537386.082474228,
            "unit": "ns",
            "range": "± 1698163.3156582348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69339940.70103092,
            "unit": "ns",
            "range": "± 5330371.272226007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 152842265.69,
            "unit": "ns",
            "range": "± 13615284.794703605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296319188.59,
            "unit": "ns",
            "range": "± 19496860.324826505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753112.8181818181,
            "unit": "ns",
            "range": "± 281494.6170346005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4058889.326530612,
            "unit": "ns",
            "range": "± 502168.0692765148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2916163.649484536,
            "unit": "ns",
            "range": "± 323771.1192980969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8502657.739583334,
            "unit": "ns",
            "range": "± 802685.5099728038"
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
          "id": "7f194abb611a038ebed510e3d018980e945c326c",
          "message": "Partially removed t from transaction",
          "timestamp": "2023-04-28T19:02:49+09:00",
          "tree_id": "21ae5700d32b3587eb21a0a9ad3d3c38553cfdd0",
          "url": "https://github.com/greymistcube/libplanet/commit/7f194abb611a038ebed510e3d018980e945c326c"
        },
        "date": 1682677117734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348070.3333333333,
            "unit": "ns",
            "range": "± 12733.847491428478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343842.3333333333,
            "unit": "ns",
            "range": "± 7275.650809782061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295200.97777777776,
            "unit": "ns",
            "range": "± 11200.208026657541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5256934.466666667,
            "unit": "ns",
            "range": "± 69896.48119067293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4724603.466666667,
            "unit": "ns",
            "range": "± 41985.19114243339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24468.87671232877,
            "unit": "ns",
            "range": "± 1238.1276516624864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109041.30303030302,
            "unit": "ns",
            "range": "± 9766.534417052986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98823.01052631579,
            "unit": "ns",
            "range": "± 6340.792860173931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118907.8125,
            "unit": "ns",
            "range": "± 14229.18267010479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7853.242105263158,
            "unit": "ns",
            "range": "± 988.6448894103601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25992.581395348836,
            "unit": "ns",
            "range": "± 1433.7592911857832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4230495.944444444,
            "unit": "ns",
            "range": "± 117576.81634617671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4456866.357142857,
            "unit": "ns",
            "range": "± 74982.65927082193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5354639,
            "unit": "ns",
            "range": "± 108249.0273484016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5544875.172413793,
            "unit": "ns",
            "range": "± 162490.95772338245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8227092.88,
            "unit": "ns",
            "range": "± 216629.41414358607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7116819.858072917,
            "unit": "ns",
            "range": "± 39744.98879977617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2196733.7231770833,
            "unit": "ns",
            "range": "± 871.6762666729247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1610094.3752604167,
            "unit": "ns",
            "range": "± 3118.461774111587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126832.6160714286,
            "unit": "ns",
            "range": "± 4962.379031808074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978693.9490885417,
            "unit": "ns",
            "range": "± 707.3915187732744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918643.6978515625,
            "unit": "ns",
            "range": "± 1646.13371694009"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57801.74025974026,
            "unit": "ns",
            "range": "± 2977.688163671333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10103483.28,
            "unit": "ns",
            "range": "± 266575.6532019444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26441355.61904762,
            "unit": "ns",
            "range": "± 623670.8962256035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70746099.2,
            "unit": "ns",
            "range": "± 298123.58651313913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129322031.73333333,
            "unit": "ns",
            "range": "± 1255833.7633288247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262018204.35714287,
            "unit": "ns",
            "range": "± 1106223.2979052651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1752956.4020618557,
            "unit": "ns",
            "range": "± 110498.88109941242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3110552.4,
            "unit": "ns",
            "range": "± 55067.84450086483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2751369.37704918,
            "unit": "ns",
            "range": "± 117429.21671389448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6512802.230769231,
            "unit": "ns",
            "range": "± 76394.2434253108"
          }
        ]
      }
    ]
  }
}