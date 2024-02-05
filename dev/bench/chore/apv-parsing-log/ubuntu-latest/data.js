window.BENCHMARK_DATA = {
  "lastUpdate": 1707148951182,
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
          "id": "c013e427c088698e17084b792a8cfc1d0093d31a",
          "message": "Added which string caused a parsing error to log",
          "timestamp": "2024-02-05T18:29:44+09:00",
          "tree_id": "4dc1b8a7501d78e6554f41916915a523e718fd6f",
          "url": "https://github.com/greymistcube/libplanet/commit/c013e427c088698e17084b792a8cfc1d0093d31a"
        },
        "date": 1707148943827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234213.62765957447,
            "unit": "ns",
            "range": "± 9019.8750030311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229799.06842105262,
            "unit": "ns",
            "range": "± 13230.292792511733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169925.46153846153,
            "unit": "ns",
            "range": "± 2816.4521007639087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3275156.4615384615,
            "unit": "ns",
            "range": "± 28290.963208580066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2971397.75,
            "unit": "ns",
            "range": "± 31230.484760668758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21564.873626373625,
            "unit": "ns",
            "range": "± 3302.785796022475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85007.5303030303,
            "unit": "ns",
            "range": "± 9527.70578896689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95126.71428571429,
            "unit": "ns",
            "range": "± 1509.9345084407535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102981.70408163265,
            "unit": "ns",
            "range": "± 13910.528823286639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7971.775510204082,
            "unit": "ns",
            "range": "± 1013.1583035507632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22968.35106382979,
            "unit": "ns",
            "range": "± 4478.470302656147"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44926.12105263158,
            "unit": "ns",
            "range": "± 5424.628053096884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2613129.185185185,
            "unit": "ns",
            "range": "± 62838.57699267535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2671105.433333333,
            "unit": "ns",
            "range": "± 78799.96087942462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3320057.8095238097,
            "unit": "ns",
            "range": "± 61996.00816473513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3456031.5263157897,
            "unit": "ns",
            "range": "± 117289.94705924907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14209736.14367816,
            "unit": "ns",
            "range": "± 947871.3004779414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1136956.1666666667,
            "unit": "ns",
            "range": "± 125873.8778953522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2060337.1276595744,
            "unit": "ns",
            "range": "± 80114.05115741503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1867534.5520833333,
            "unit": "ns",
            "range": "± 210176.00742657617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13060914.211111112,
            "unit": "ns",
            "range": "± 999908.0821579765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5942785.033333333,
            "unit": "ns",
            "range": "± 35113.81030890159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15023333.714285715,
            "unit": "ns",
            "range": "± 42171.66639450012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37324188.84615385,
            "unit": "ns",
            "range": "± 280414.24581466557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76471802.64285715,
            "unit": "ns",
            "range": "± 283271.67538536544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152557471.07142857,
            "unit": "ns",
            "range": "± 1136870.3737238448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3834621.9989583334,
            "unit": "ns",
            "range": "± 30477.27900219554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187325.4573317308,
            "unit": "ns",
            "range": "± 2464.931605002483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762908.1403808594,
            "unit": "ns",
            "range": "± 1049.6782292394253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981488.080829327,
            "unit": "ns",
            "range": "± 29940.77271651562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614786.7887137277,
            "unit": "ns",
            "range": "± 3595.2085033668213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563576.0170898438,
            "unit": "ns",
            "range": "± 2404.2740051741584"
          }
        ]
      }
    ]
  }
}