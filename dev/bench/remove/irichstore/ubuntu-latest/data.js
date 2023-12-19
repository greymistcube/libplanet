window.BENCHMARK_DATA = {
  "lastUpdate": 1702967350856,
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
          "id": "56df40f304df3cbc85ce84447c148d9cdd54da7a",
          "message": "Remove unnecessary arguments",
          "timestamp": "2023-12-19T15:18:03+09:00",
          "tree_id": "4b66446b048ef2de59401d42b381fefc544182ee",
          "url": "https://github.com/greymistcube/libplanet/commit/56df40f304df3cbc85ce84447c148d9cdd54da7a"
        },
        "date": 1702967344710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715250.315011161,
            "unit": "ns",
            "range": "± 40586.068323255764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195350.389485677,
            "unit": "ns",
            "range": "± 2301.6349810230886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758320.8213641827,
            "unit": "ns",
            "range": "± 4436.788463232038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915437.6223958333,
            "unit": "ns",
            "range": "± 2509.950411187875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622013.8557692308,
            "unit": "ns",
            "range": "± 1218.673162746257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575284.4278971354,
            "unit": "ns",
            "range": "± 12173.466476256166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2302982.96,
            "unit": "ns",
            "range": "± 59642.65332735406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2449377.7153846156,
            "unit": "ns",
            "range": "± 96929.91309905516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3072515.0625,
            "unit": "ns",
            "range": "± 58615.134783283575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2933448.4905660376,
            "unit": "ns",
            "range": "± 121663.66210876712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6945696.017241379,
            "unit": "ns",
            "range": "± 190327.87856666502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39683.9381443299,
            "unit": "ns",
            "range": "± 5029.915648759333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197070.8142857143,
            "unit": "ns",
            "range": "± 8892.24034883966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190241.82558139536,
            "unit": "ns",
            "range": "± 5650.169920415501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171560.6739130435,
            "unit": "ns",
            "range": "± 4246.489455497585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3062118.5,
            "unit": "ns",
            "range": "± 18893.728315339093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2901227.6842105263,
            "unit": "ns",
            "range": "± 61300.805675376665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12726.935483870968,
            "unit": "ns",
            "range": "± 1377.1748002977092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61092.50515463918,
            "unit": "ns",
            "range": "± 5982.847421872854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52596.362068965514,
            "unit": "ns",
            "range": "± 2154.0451904255965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72278.71578947369,
            "unit": "ns",
            "range": "± 19744.030108053594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3313.625,
            "unit": "ns",
            "range": "± 920.2495799910392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15352.297872340425,
            "unit": "ns",
            "range": "± 1370.4239186359882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5679750.714285715,
            "unit": "ns",
            "range": "± 23678.025240646723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14358808,
            "unit": "ns",
            "range": "± 216044.9206878051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37036653.71428572,
            "unit": "ns",
            "range": "± 363367.22920042847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75423702.2,
            "unit": "ns",
            "range": "± 745727.1232866043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148945707.7857143,
            "unit": "ns",
            "range": "± 1137698.5859855025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010288.1789473684,
            "unit": "ns",
            "range": "± 104473.95914354548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916019,
            "unit": "ns",
            "range": "± 57967.19366388774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524949.4226804124,
            "unit": "ns",
            "range": "± 159587.74968348365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6295877.75,
            "unit": "ns",
            "range": "± 407862.29915943573"
          }
        ]
      }
    ]
  }
}