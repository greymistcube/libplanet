window.BENCHMARK_DATA = {
  "lastUpdate": 1679031200035,
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
          "id": "8bdcf2943248ad564bb640786cccf2405d470018",
          "message": "Implemented IBencodable for BlockCommit",
          "timestamp": "2023-03-17T14:20:23+09:00",
          "tree_id": "76831a6c51a007ca9ff79824232395c3d299955c",
          "url": "https://github.com/greymistcube/libplanet/commit/8bdcf2943248ad564bb640786cccf2405d470018"
        },
        "date": 1679031192431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295013.933333333,
            "unit": "ns",
            "range": "± 34076.040685222695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5232525.6,
            "unit": "ns",
            "range": "± 61128.00321082684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23616993.64285714,
            "unit": "ns",
            "range": "± 194162.88343418785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6325036.214285715,
            "unit": "ns",
            "range": "± 62819.81580334293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27026331.533333335,
            "unit": "ns",
            "range": "± 214625.8034356762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7840171.4,
            "unit": "ns",
            "range": "± 56672.17424526533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19729819.466666665,
            "unit": "ns",
            "range": "± 38172.41492578989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50941182.35714286,
            "unit": "ns",
            "range": "± 119230.94321500423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101972293.66666667,
            "unit": "ns",
            "range": "± 384173.52696324734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203152624.86666667,
            "unit": "ns",
            "range": "± 443618.4682621618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1400100.7857142857,
            "unit": "ns",
            "range": "± 100888.44162954517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2504241.6666666665,
            "unit": "ns",
            "range": "± 58863.02750906832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2166448.593023256,
            "unit": "ns",
            "range": "± 117359.63579631707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5032131.7727272725,
            "unit": "ns",
            "range": "± 117833.51579116951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46869.717647058824,
            "unit": "ns",
            "range": "± 2544.239008743763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5981574.76171875,
            "unit": "ns",
            "range": "± 13038.348433466968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999405.4502604166,
            "unit": "ns",
            "range": "± 2126.6107857575835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349418.5834635417,
            "unit": "ns",
            "range": "± 684.6031389477511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610454.43046875,
            "unit": "ns",
            "range": "± 2540.1152617020325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864202.469140625,
            "unit": "ns",
            "range": "± 9972.400525179866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736066.5195963542,
            "unit": "ns",
            "range": "± 364.59633401507614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205243.15789473685,
            "unit": "ns",
            "range": "± 6942.365678761001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198072.2105263158,
            "unit": "ns",
            "range": "± 8602.718963329562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171584.6511627907,
            "unit": "ns",
            "range": "± 5899.748509102178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11619226.533333333,
            "unit": "ns",
            "range": "± 57782.622702760076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9710524.642857144,
            "unit": "ns",
            "range": "± 55107.67837551824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20050.933333333334,
            "unit": "ns",
            "range": "± 1134.8560152199482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57195.364583333336,
            "unit": "ns",
            "range": "± 4920.726499891297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39562.208333333336,
            "unit": "ns",
            "range": "± 829.8986307488648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97758.65625,
            "unit": "ns",
            "range": "± 12007.016753661059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5467.484536082474,
            "unit": "ns",
            "range": "± 636.0960867111271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19808.41489361702,
            "unit": "ns",
            "range": "± 1548.842970233736"
          }
        ]
      }
    ]
  }
}