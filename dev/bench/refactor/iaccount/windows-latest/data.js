window.BENCHMARK_DATA = {
  "lastUpdate": 1693966013150,
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
          "id": "ad38230c09d5cc9bd0ac62a5cfd2c9c9fea4e9ff",
          "message": "Partial rollback for better API backward compatibility",
          "timestamp": "2023-09-06T10:05:14+09:00",
          "tree_id": "4b9e90624befad25a05a2d08390eddc4eeea7721",
          "url": "https://github.com/greymistcube/libplanet/commit/ad38230c09d5cc9bd0ac62a5cfd2c9c9fea4e9ff"
        },
        "date": 1693963768290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590468.75,
            "unit": "ns",
            "range": "± 182185.53545478676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3067400,
            "unit": "ns",
            "range": "± 336498.9586412812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035166.3265306123,
            "unit": "ns",
            "range": "± 219730.74804840787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5558543.298969072,
            "unit": "ns",
            "range": "± 411603.38942846836"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65988.29787234042,
            "unit": "ns",
            "range": "± 14981.291963631353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8911184.848484848,
            "unit": "ns",
            "range": "± 601552.7110369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24820898.214285713,
            "unit": "ns",
            "range": "± 1066734.6529549581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64135712.121212125,
            "unit": "ns",
            "range": "± 1988488.9905336376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128441178.57142857,
            "unit": "ns",
            "range": "± 1972528.2391187407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262243873.07692307,
            "unit": "ns",
            "range": "± 3907634.080052755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5294348.014322917,
            "unit": "ns",
            "range": "± 135194.68423370153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1696456.7595108696,
            "unit": "ns",
            "range": "± 41640.0849834506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1214146.8489583333,
            "unit": "ns",
            "range": "± 14662.775939133862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3118220.9635416665,
            "unit": "ns",
            "range": "± 42864.57826462163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001745.517578125,
            "unit": "ns",
            "range": "± 20088.59405546449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955747.3815917969,
            "unit": "ns",
            "range": "± 18106.08923891815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3903951.0204081633,
            "unit": "ns",
            "range": "± 302676.86735176155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4328435,
            "unit": "ns",
            "range": "± 424874.2510045374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4811956.382978723,
            "unit": "ns",
            "range": "± 333562.2412324629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4014912.6315789474,
            "unit": "ns",
            "range": "± 329813.2844575901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7112908.421052632,
            "unit": "ns",
            "range": "± 452219.5606032111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312261.4583333333,
            "unit": "ns",
            "range": "± 35631.38583886748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315311.2244897959,
            "unit": "ns",
            "range": "± 47377.05495943683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275865.306122449,
            "unit": "ns",
            "range": "± 39877.306938510905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4546216,
            "unit": "ns",
            "range": "± 395648.8022108864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4214366.666666667,
            "unit": "ns",
            "range": "± 334196.0158783847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30935.714285714286,
            "unit": "ns",
            "range": "± 10657.394219338596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105207.21649484536,
            "unit": "ns",
            "range": "± 21702.305212727788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115379.59183673469,
            "unit": "ns",
            "range": "± 23957.866620956924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123558.94736842105,
            "unit": "ns",
            "range": "± 23782.15178576216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7474.418604651163,
            "unit": "ns",
            "range": "± 1276.7777499269866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28928,
            "unit": "ns",
            "range": "± 10601.668250656106"
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
          "id": "4945064eb0a4cc1dfe24c6737a129068823a2cbe",
          "message": "Changelog",
          "timestamp": "2023-09-06T10:46:50+09:00",
          "tree_id": "56559f8dbefdd2412f10a3531afb5e0c2d0c9ec7",
          "url": "https://github.com/greymistcube/libplanet/commit/4945064eb0a4cc1dfe24c6737a129068823a2cbe"
        },
        "date": 1693965983880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520851.5789473683,
            "unit": "ns",
            "range": "± 185191.4856408452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800724.210526316,
            "unit": "ns",
            "range": "± 275375.7594191978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1880745.918367347,
            "unit": "ns",
            "range": "± 188439.65654401475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5203478.947368421,
            "unit": "ns",
            "range": "± 461082.03333784896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62758.69565217391,
            "unit": "ns",
            "range": "± 12761.60236738622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9773819.191919193,
            "unit": "ns",
            "range": "± 866354.5451448951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25131589.69072165,
            "unit": "ns",
            "range": "± 1482375.3499089263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66346603.84615385,
            "unit": "ns",
            "range": "± 2718498.6791632557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131861088.23529412,
            "unit": "ns",
            "range": "± 4091286.548690248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267493739.47368422,
            "unit": "ns",
            "range": "± 5818694.878473344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5689298.671875,
            "unit": "ns",
            "range": "± 90967.70097029347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1787889.94140625,
            "unit": "ns",
            "range": "± 14194.434915179194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348533.1640625,
            "unit": "ns",
            "range": "± 15437.701666781708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3255961.104910714,
            "unit": "ns",
            "range": "± 45419.32067818532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1058597.7294921875,
            "unit": "ns",
            "range": "± 18216.008246890433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996619.1796875,
            "unit": "ns",
            "range": "± 18209.76905417146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683975,
            "unit": "ns",
            "range": "± 298113.8224871412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4098886.9565217393,
            "unit": "ns",
            "range": "± 292058.5438140978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5242519.791666667,
            "unit": "ns",
            "range": "± 353163.74243767967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4528603.191489362,
            "unit": "ns",
            "range": "± 340554.0597674817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7801043.529411765,
            "unit": "ns",
            "range": "± 388627.64571142447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340438.5416666667,
            "unit": "ns",
            "range": "± 41656.14220152935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331490.9090909091,
            "unit": "ns",
            "range": "± 24757.18444852285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298730.10752688174,
            "unit": "ns",
            "range": "± 26568.679603207187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4951588.541666667,
            "unit": "ns",
            "range": "± 294387.8465275257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4549538.29787234,
            "unit": "ns",
            "range": "± 286051.61881210987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29005.31914893617,
            "unit": "ns",
            "range": "± 4727.53014743409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121458.51063829787,
            "unit": "ns",
            "range": "± 14588.369277889069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131238.09523809524,
            "unit": "ns",
            "range": "± 4710.597931129047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129376.84210526316,
            "unit": "ns",
            "range": "± 16600.310511269025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9717.391304347826,
            "unit": "ns",
            "range": "± 1134.9210841183196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27966.315789473683,
            "unit": "ns",
            "range": "± 6420.870401100366"
          }
        ]
      }
    ]
  }
}