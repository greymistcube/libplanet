window.BENCHMARK_DATA = {
  "lastUpdate": 1707149171845,
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
          "id": "9c544b6d33ef5af407e9d5e1ed2a74822b368ef4",
          "message": "Changelog",
          "timestamp": "2024-02-06T00:54:59+09:00",
          "tree_id": "00660c0b4df326a0cea1429d4df493cd2104ebb9",
          "url": "https://github.com/greymistcube/libplanet/commit/9c544b6d33ef5af407e9d5e1ed2a74822b368ef4"
        },
        "date": 1707149165578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195924.3596491228,
            "unit": "ns",
            "range": "± 8065.347803674408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192150.22727272726,
            "unit": "ns",
            "range": "± 9173.71512247494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170328.24137931035,
            "unit": "ns",
            "range": "± 4939.9635095180065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3222035.230769231,
            "unit": "ns",
            "range": "± 37708.19621592863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2860390.2,
            "unit": "ns",
            "range": "± 44612.39331844908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14265.65306122449,
            "unit": "ns",
            "range": "± 2011.4347605424264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64628.914893617024,
            "unit": "ns",
            "range": "± 8489.685262932117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61451.5,
            "unit": "ns",
            "range": "± 1250.2392829798152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60415.10752688172,
            "unit": "ns",
            "range": "± 10185.420206975268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3480.516853932584,
            "unit": "ns",
            "range": "± 730.8534878725314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12005.061224489797,
            "unit": "ns",
            "range": "± 1210.2323353353556"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40967.6947368421,
            "unit": "ns",
            "range": "± 6468.671738880985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380125.9615384615,
            "unit": "ns",
            "range": "± 62736.74685508057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2662741.935483871,
            "unit": "ns",
            "range": "± 68572.56931695816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3178134.9285714286,
            "unit": "ns",
            "range": "± 41089.307878766274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3153846.3625,
            "unit": "ns",
            "range": "± 161443.74563442997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13889873.40860215,
            "unit": "ns",
            "range": "± 1228301.5293311507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991012.0729166666,
            "unit": "ns",
            "range": "± 93063.26411185309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1897958.4027777778,
            "unit": "ns",
            "range": "± 93601.17910742511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579677.425531915,
            "unit": "ns",
            "range": "± 155540.71935728783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12817260.934065934,
            "unit": "ns",
            "range": "± 1069844.3415094947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5547176.884615385,
            "unit": "ns",
            "range": "± 16423.49170922788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14384422.666666666,
            "unit": "ns",
            "range": "± 67228.83667282182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36285777.307692304,
            "unit": "ns",
            "range": "± 141718.31690562834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75122187,
            "unit": "ns",
            "range": "± 347644.53543502354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149875126.26923078,
            "unit": "ns",
            "range": "± 882050.3090084256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3677905.740985577,
            "unit": "ns",
            "range": "± 6787.973704164327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207458.8114483173,
            "unit": "ns",
            "range": "± 2439.5828822853045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773299.0209309895,
            "unit": "ns",
            "range": "± 14164.912090431304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952577.7451822916,
            "unit": "ns",
            "range": "± 23293.70792320879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618308.6048990885,
            "unit": "ns",
            "range": "± 3504.268925671807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572133.8937800481,
            "unit": "ns",
            "range": "± 3748.334863081104"
          }
        ]
      }
    ]
  }
}