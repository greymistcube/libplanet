window.BENCHMARK_DATA = {
  "lastUpdate": 1678672951065,
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
          "id": "9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad",
          "message": "Added test for forking",
          "timestamp": "2023-03-13T10:44:44+09:00",
          "tree_id": "f9eb705af2c77b510ecdaf84c43ffe709d979a1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad"
        },
        "date": 1678672932751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8718231.9,
            "unit": "ns",
            "range": "± 329033.4270138411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23560195.941860463,
            "unit": "ns",
            "range": "± 3950854.8154667555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52754038.17391305,
            "unit": "ns",
            "range": "± 1139172.8917598166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107767070.74193548,
            "unit": "ns",
            "range": "± 3194083.0056477557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 211215620.62962964,
            "unit": "ns",
            "range": "± 5822223.2634490505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72472.13043478261,
            "unit": "ns",
            "range": "± 10914.280095580185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203125.08602150538,
            "unit": "ns",
            "range": "± 12491.518591024518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218882.10638297873,
            "unit": "ns",
            "range": "± 26847.017097665143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195273.2052631579,
            "unit": "ns",
            "range": "± 18395.77316209773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12124577.476190476,
            "unit": "ns",
            "range": "± 288282.70005441166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9881165.166666666,
            "unit": "ns",
            "range": "± 170243.06353969596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21709.932989690722,
            "unit": "ns",
            "range": "± 3916.3946002329326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57227.55789473684,
            "unit": "ns",
            "range": "± 8729.368399462097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55829.73469387755,
            "unit": "ns",
            "range": "± 6047.299214075414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118082.01086956522,
            "unit": "ns",
            "range": "± 15159.800852945906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7171.726315789474,
            "unit": "ns",
            "range": "± 1173.6850264536008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17898.775280898877,
            "unit": "ns",
            "range": "± 2515.860822104475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645500.547368421,
            "unit": "ns",
            "range": "± 208728.3747973116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2921274.9156626505,
            "unit": "ns",
            "range": "± 155026.231708104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2570333.595505618,
            "unit": "ns",
            "range": "± 218006.73703610623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6498393.697916667,
            "unit": "ns",
            "range": "± 403764.66871112253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3418498.78125,
            "unit": "ns",
            "range": "± 142455.38098930672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5229107.111111111,
            "unit": "ns",
            "range": "± 110709.20045891234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23694378.333333332,
            "unit": "ns",
            "range": "± 696178.4658636122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6338871.111111111,
            "unit": "ns",
            "range": "± 231580.1618322204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28350386.75471698,
            "unit": "ns",
            "range": "± 1176589.2390476658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7089455.820790816,
            "unit": "ns",
            "range": "± 282474.2081050984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2019005.8501674107,
            "unit": "ns",
            "range": "± 27481.00287403242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295059.622578125,
            "unit": "ns",
            "range": "± 33740.991469698325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2726901.3505284926,
            "unit": "ns",
            "range": "± 52319.307785827295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851225.7454927885,
            "unit": "ns",
            "range": "± 8058.7980863993525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736001.9194178428,
            "unit": "ns",
            "range": "± 21700.90244212408"
          }
        ]
      }
    ]
  }
}