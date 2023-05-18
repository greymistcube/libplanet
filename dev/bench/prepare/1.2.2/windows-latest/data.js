window.BENCHMARK_DATA = {
  "lastUpdate": 1684377286811,
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
          "id": "ccebb8e5ccd3d96fd056ed0f4e64cc5bbe8ef699",
          "message": "Prepare 1.2.2",
          "timestamp": "2023-05-18T11:18:14+09:00",
          "tree_id": "02032a856fc0fc2cfdbf33544da2b4656195e77b",
          "url": "https://github.com/greymistcube/libplanet/commit/ccebb8e5ccd3d96fd056ed0f4e64cc5bbe8ef699"
        },
        "date": 1684377265053,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413146.9696969697,
            "unit": "ns",
            "range": "± 86424.64271418532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2695029.8245614036,
            "unit": "ns",
            "range": "± 117093.33268336521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464179.3103448274,
            "unit": "ns",
            "range": "± 65915.22899750182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5327790.909090909,
            "unit": "ns",
            "range": "± 199462.0658907024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48773.19587628866,
            "unit": "ns",
            "range": "± 3651.099020155824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7470953.333333333,
            "unit": "ns",
            "range": "± 82685.66006843254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20178364.285714287,
            "unit": "ns",
            "range": "± 129515.1230085201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50492257.14285714,
            "unit": "ns",
            "range": "± 233096.46307677237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102999542.85714285,
            "unit": "ns",
            "range": "± 973168.10684271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204573407.69230768,
            "unit": "ns",
            "range": "± 1173488.2782126816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4861534.877232143,
            "unit": "ns",
            "range": "± 9105.305971278427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1538310.17578125,
            "unit": "ns",
            "range": "± 4891.085357128882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1193574.62890625,
            "unit": "ns",
            "range": "± 5324.401885737798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704099.4270833335,
            "unit": "ns",
            "range": "± 16853.576851583515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848396.9140625,
            "unit": "ns",
            "range": "± 2743.560598969709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792420.44921875,
            "unit": "ns",
            "range": "± 2196.877016044487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3401246.6666666665,
            "unit": "ns",
            "range": "± 47482.20518808925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586696.6666666665,
            "unit": "ns",
            "range": "± 133848.4448240553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4292926.666666667,
            "unit": "ns",
            "range": "± 52722.78535166835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4587920,
            "unit": "ns",
            "range": "± 77602.68036608014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6767692.592592592,
            "unit": "ns",
            "range": "± 178019.96198768515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277565.306122449,
            "unit": "ns",
            "range": "± 9617.400701775061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271060.2409638554,
            "unit": "ns",
            "range": "± 14414.330096690248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252269.81132075473,
            "unit": "ns",
            "range": "± 10405.260964192408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150560,
            "unit": "ns",
            "range": "± 43026.00210503943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794914.285714286,
            "unit": "ns",
            "range": "± 16260.563768391736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24164.444444444445,
            "unit": "ns",
            "range": "± 1630.0245473516004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100347.36842105263,
            "unit": "ns",
            "range": "± 5918.845526183458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86135.38461538461,
            "unit": "ns",
            "range": "± 4002.7112205834455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100364.94845360825,
            "unit": "ns",
            "range": "± 10793.835443949723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7260.416666666667,
            "unit": "ns",
            "range": "± 966.4344851230672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23225,
            "unit": "ns",
            "range": "± 1453.500889289317"
          }
        ]
      }
    ]
  }
}