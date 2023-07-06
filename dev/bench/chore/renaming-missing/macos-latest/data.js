window.BENCHMARK_DATA = {
  "lastUpdate": 1688654215060,
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
          "id": "60eacade4de9605e11fb451c3e6d13a34edbd2bf",
          "message": "Rename for consistency",
          "timestamp": "2023-07-06T23:19:19+09:00",
          "tree_id": "e811de14bbc4e38e3ab42577020221039d670e6e",
          "url": "https://github.com/greymistcube/libplanet/commit/60eacade4de9605e11fb451c3e6d13a34edbd2bf"
        },
        "date": 1688654194065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9120458.193548387,
            "unit": "ns",
            "range": "± 274084.6098053688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24296200.666666668,
            "unit": "ns",
            "range": "± 414298.9033337209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57956210.21428572,
            "unit": "ns",
            "range": "± 1292632.6249968759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116876942.25714286,
            "unit": "ns",
            "range": "± 3835121.136322664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231095461.14285713,
            "unit": "ns",
            "range": "± 2353866.578822495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63091.65517241379,
            "unit": "ns",
            "range": "± 4658.898686678491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390846.24210526317,
            "unit": "ns",
            "range": "± 28191.55358444425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353884.8125,
            "unit": "ns",
            "range": "± 18483.04426853848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314126.5967741936,
            "unit": "ns",
            "range": "± 9472.509197162206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4422166,
            "unit": "ns",
            "range": "± 151283.2218505201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4142232.488235294,
            "unit": "ns",
            "range": "± 302271.56736969296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17214.61111111111,
            "unit": "ns",
            "range": "± 1735.4119827867964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90683.91208791209,
            "unit": "ns",
            "range": "± 11371.629897491339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86319.50537634408,
            "unit": "ns",
            "range": "± 9659.226174811649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112109.56382978724,
            "unit": "ns",
            "range": "± 12790.071919063108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5136.919753086419,
            "unit": "ns",
            "range": "± 524.7259490485851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17296.493827160495,
            "unit": "ns",
            "range": "± 2041.9340900446366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676781.6741573033,
            "unit": "ns",
            "range": "± 187183.56316374763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3299611.6021505375,
            "unit": "ns",
            "range": "± 264273.4320721191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2307736.488505747,
            "unit": "ns",
            "range": "± 343557.04511134594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6696297.076923077,
            "unit": "ns",
            "range": "± 576490.4655158416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3814451.117977528,
            "unit": "ns",
            "range": "± 221617.85381092722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4155952.0833333335,
            "unit": "ns",
            "range": "± 271272.4386422611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5226382.192982456,
            "unit": "ns",
            "range": "± 224848.70490751573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4662126.645833333,
            "unit": "ns",
            "range": "± 325624.0080775753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8788583.257575758,
            "unit": "ns",
            "range": "± 382307.51404238853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6327046.584735577,
            "unit": "ns",
            "range": "± 54136.333006269364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2247419.435096154,
            "unit": "ns",
            "range": "± 12863.139976530538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379981.013671875,
            "unit": "ns",
            "range": "± 17890.784793916766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2978948.47890625,
            "unit": "ns",
            "range": "± 50287.67761860225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 969046.44140625,
            "unit": "ns",
            "range": "± 18595.897825477197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796568.3615112305,
            "unit": "ns",
            "range": "± 15201.933933782719"
          }
        ]
      }
    ]
  }
}