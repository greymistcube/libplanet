window.BENCHMARK_DATA = {
  "lastUpdate": 1696475619074,
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
          "id": "bc7a99c65e5a7aacb0d24f5ac3d72213f300a257",
          "message": "Cleanup",
          "timestamp": "2023-10-05T11:56:09+09:00",
          "tree_id": "06d15ec5d16917f0ef69baf8d4d45a0825f90f34",
          "url": "https://github.com/greymistcube/libplanet/commit/bc7a99c65e5a7aacb0d24f5ac3d72213f300a257"
        },
        "date": 1696475594430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1250682.4561403508,
            "unit": "ns",
            "range": "± 52508.16304839461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2569584.8484848486,
            "unit": "ns",
            "range": "± 167218.6405508695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1948573.6263736263,
            "unit": "ns",
            "range": "± 109068.95457580427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8903292.553191489,
            "unit": "ns",
            "range": "± 587787.5993817489"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48388.76404494382,
            "unit": "ns",
            "range": "± 4244.767854297142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7077723.076923077,
            "unit": "ns",
            "range": "± 28855.9397076279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19445223.076923076,
            "unit": "ns",
            "range": "± 511732.9782671368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47927137.5,
            "unit": "ns",
            "range": "± 916736.5123996462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95356842.85714285,
            "unit": "ns",
            "range": "± 1439510.0046219178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193103214.2857143,
            "unit": "ns",
            "range": "± 2813531.5125457384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4387115.703125,
            "unit": "ns",
            "range": "± 18232.01603427245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400369.4401041667,
            "unit": "ns",
            "range": "± 6474.504891803119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047469.609375,
            "unit": "ns",
            "range": "± 7560.368342836883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622043.7239583335,
            "unit": "ns",
            "range": "± 16252.212380159634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858462.5065104166,
            "unit": "ns",
            "range": "± 9600.068685625554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757022.9417067308,
            "unit": "ns",
            "range": "± 2585.698271830875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047379.104477612,
            "unit": "ns",
            "range": "± 144817.5848786845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3219353.1914893617,
            "unit": "ns",
            "range": "± 119157.29438355993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3884328,
            "unit": "ns",
            "range": "± 94452.23448918507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3756647.727272727,
            "unit": "ns",
            "range": "± 124967.95773249584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10695200,
            "unit": "ns",
            "range": "± 955061.6796145325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239363.33333333334,
            "unit": "ns",
            "range": "± 6056.9984220781735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233931.914893617,
            "unit": "ns",
            "range": "± 15377.655992401315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214487.87878787878,
            "unit": "ns",
            "range": "± 18776.169616152954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4471600,
            "unit": "ns",
            "range": "± 48061.973880952224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4699069.072164948,
            "unit": "ns",
            "range": "± 488545.8359511131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23510.98901098901,
            "unit": "ns",
            "range": "± 1958.426270103997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88423.71134020618,
            "unit": "ns",
            "range": "± 8747.04441982972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66125.64102564103,
            "unit": "ns",
            "range": "± 2290.910867883863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70457.57575757576,
            "unit": "ns",
            "range": "± 7302.223464977467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4744.845360824742,
            "unit": "ns",
            "range": "± 533.926324119376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16297.802197802197,
            "unit": "ns",
            "range": "± 1018.38412551759"
          }
        ]
      }
    ]
  }
}